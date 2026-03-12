# Deployment Guide — Awalab Web (awalabdemexico.entersys.mx)

## Overview

Static Next.js 15 site running in Docker on GCP production server behind Traefik reverse proxy with Cloudflare DNS.

## Architecture

```
[User] → [Cloudflare DNS/SSL] → [GCP 34.59.193.54:443] → [Traefik] → [awalab-web:3000]
```

## Prerequisites

- **Local:** Git, Node.js 20+, npm, gcloud CLI authenticated
- **Server:** Docker, Docker Compose v2, Traefik v2.10, network `traefik` (external)
- **Accounts:** GitHub (armando-entersys), GCP project with prod-server

## Repository

```
https://github.com/armando-entersys/core-awalab.git
```

---

## Full Deployment Flow (Local → GitHub → Production)

### Step 1: Make changes locally

```bash
cd "C:/Core Inteligente Awalab/awalab-web"
# ... edit code ...
```

### Step 2: Build and verify locally

```bash
npm run build
# Must show 0 errors, all pages listed as static (○)
```

### Step 3: Commit and push

```bash
git add <changed-files>
git commit -m "feat: description of changes"
git push origin main
```

### Step 4: Pull on production server

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /home/Usuario/awalab-web && git pull origin main"
```

### Step 5: Rebuild and restart Docker container

```bash
# Rebuild image (includes npm ci + next build inside Docker)
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /home/Usuario/awalab-web && docker compose build --no-cache"

# Restart container with new image
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /home/Usuario/awalab-web && docker compose up -d"
```

### Step 6: Verify deployment

```bash
# Check container is running and healthy
gcloud compute ssh prod-server --zone=us-central1-c --command="docker ps --filter name=awalab-web"

# Check app responds inside container
gcloud compute ssh prod-server --zone=us-central1-c --command="docker exec awalab-web wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/"

# Check public URL
gcloud compute ssh prod-server --zone=us-central1-c --command="curl -s -o /dev/null -w '%{http_code}' https://awalabdemexico.entersys.mx/"
# Expected: 200
```

---

## Quick Deploy (one-liner after push)

```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="cd /home/Usuario/awalab-web && git pull origin main && docker compose build --no-cache && docker compose up -d && sleep 5 && docker ps --filter name=awalab-web"
```

---

## Server Details

| Item | Value |
|------|-------|
| **GCP Instance** | prod-server |
| **Zone** | us-central1-c |
| **IP** | 34.59.193.54 |
| **SSH** | `gcloud compute ssh prod-server --zone=us-central1-c` |
| **App directory** | `/home/Usuario/awalab-web` |
| **Container name** | awalab-web |
| **Internal port** | 3000 (NOT exposed to host, only via Traefik) |
| **Domain** | awalabdemexico.entersys.mx |
| **SSL** | Cloudflare (edge) + Let's Encrypt (origin) |
| **RAM reservation** | 512MB (soft limit only, NEVER use mem_limit) |

## Traefik Configuration

Traefik routes traffic to this container via **file-based dynamic config** (not Docker labels, due to socket-proxy discovery issue).

Config file location on server:
```
/srv/traefik/dynamic/awalab-web.yml
```

Contents:
```yaml
http:
  routers:
    awalab-web:
      rule: Host(`awalabdemexico.entersys.mx`)
      entrypoints:
        - websecure
      service: awalab-web
      tls:
        certResolver: letsencrypt
      middlewares:
        - awalab-headers

  services:
    awalab-web:
      loadBalancer:
        servers:
          - url: http://awalab-web:3000

  middlewares:
    awalab-headers:
      headers:
        customResponseHeaders:
          X-Frame-Options: SAMEORIGIN
          X-Content-Type-Options: nosniff
          Referrer-Policy: strict-origin-when-cross-origin
        stsSeconds: 31536000
        stsIncludeSubdomains: true
```

**Important:** If the container name changes, update the `url` in this file.

## Docker Setup

### Dockerfile (multi-stage)
- Stage 1 (deps): `node:20-alpine`, `npm ci`
- Stage 2 (builder): copies deps, runs `npm run build`
- Stage 3 (runner): copies standalone output, runs `node server.js`
- Output mode: `standalone` (configured in `next.config.ts`)

### docker-compose.yml
- Network: `traefik` (external)
- Healthcheck: `wget http://127.0.0.1:3000/` every 30s
- No port mapping to host (Traefik handles routing)
- Environment variables via `.env` file (optional, for SMTP/reCAPTCHA)

## Troubleshooting

### Container won't start
```bash
gcloud compute ssh prod-server --zone=us-central1-c --command="docker logs awalab-web --tail 50"
```

### Traefik not routing (404)
```bash
# Check if router exists
gcloud compute ssh prod-server --zone=us-central1-c --command="curl -s http://localhost:8080/api/http/routers | python3 -c 'import sys,json; [print(r[\"name\"],r[\"status\"]) for r in json.load(sys.stdin) if \"awalab-web\" in r[\"name\"]]'"

# If missing, verify the dynamic config file exists
gcloud compute ssh prod-server --zone=us-central1-c --command="cat /srv/traefik/dynamic/awalab-web.yml"

# Check container is in traefik network
gcloud compute ssh prod-server --zone=us-central1-c --command="docker inspect awalab-web --format '{{json .NetworkSettings.Networks}}' | python3 -m json.tool"
```

### Healthcheck failing
```bash
# Test manually inside container (MUST use 127.0.0.1, NOT localhost — IPv6 issue)
gcloud compute ssh prod-server --zone=us-central1-c --command="docker exec awalab-web wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/"
```

### Build fails on server
```bash
# Check disk space
gcloud compute ssh prod-server --zone=us-central1-c --command="df -h /"

# Clean Docker cache if needed
gcloud compute ssh prod-server --zone=us-central1-c --command="docker system prune -f"
```

## Critical Rules

1. **NEVER use `mem_limit` or `limits` in Docker** — only `reservations` (soft limits). This is an EnterSys infrastructure rule.
2. **NEVER expose ports directly** — all HTTP traffic goes through Traefik.
3. **ALWAYS commit and push before deploying** — the server pulls from GitHub, never receives files directly.
4. **ALWAYS verify the build locally** (`npm run build`) before pushing.
5. **Container name MUST be `awalab-web`** — Traefik routes to it by this DNS name.

## DNS Setup (already done)

- `awalabdemexico.entersys.mx` → Cloudflare proxy → 34.59.193.54
- `api.awalabdemexico.entersys.mx` → Cloudflare proxy → 34.59.193.54 (reserved for future API)

## Environment Variables (.env)

Optional — the site works without them. Create `/home/Usuario/awalab-web/.env` on server if needed:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# reCAPTCHA (for forms, optional until forms are active)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# SMTP (for contact form emails, optional)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
NOTIFICATION_EMAIL=
NOTIFICATION_WHATSAPP=
```
