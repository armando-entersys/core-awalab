'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

/* ── Brand colors ─── */
const ACCENT = new THREE.Color(0x0a87c6);
const ACCENT_DIM = new THREE.Color(0x0a87c6).multiplyScalar(0.4);
const WHITE_DIM = new THREE.Color(0x94a3b8);

/* ── Orbiting node ─── */
function OrbitalNode({
  radius,
  speed,
  offset,
  size,
  tilt,
}: {
  radius: number;
  speed: number;
  offset: number;
  size: number;
  tilt: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius,
      0
    );
  });

  return (
    <group ref={groupRef} rotation={tilt}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color="white"
          emissive={ACCENT}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

/* ── Orbital ring ─── */
function OrbitalRing({
  radius,
  tilt,
  pulseOffset,
}: {
  radius: number;
  tilt: [number, number, number];
  pulseOffset: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.z += 0.001;
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.08 + Math.sin(t + pulseOffset) * 0.04;
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshBasicMaterial
        color={ACCENT}
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ── Floating particles ─── */
function BackgroundParticles({ count = 150 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.015;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={WHITE_DIM}
        size={0.04}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Core sphere with glow ─── */
function CoreSphere() {
  const coreRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 1.5) * 0.06;
    coreRef.current.scale.setScalar(s);
    glowRef.current.scale.setScalar(s * 1.8);
    (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.08 + Math.sin(t * 1.5) * 0.04;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={1}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

/* ── Scene content ─── */
function Scene() {
  const RING_TILTS: [number, number, number][] = [
    [0.3, 0, 0],
    [Math.PI / 3, Math.PI / 4, 0],
    [(Math.PI * 2) / 3, Math.PI / 2, 0.2],
  ];

  const nodeConfigs = useMemo(() => {
    const configs: {
      radius: number;
      speed: number;
      offset: number;
      size: number;
      tilt: [number, number, number];
    }[] = [];
    for (let r = 0; r < 3; r++) {
      const count = 3 + r;
      for (let i = 0; i < count; i++) {
        configs.push({
          radius: 3.2,
          speed: 0.18 + r * 0.05,
          offset: (Math.PI * 2 * i) / count,
          size: 0.06 + Math.random() * 0.08,
          tilt: RING_TILTS[r],
        });
      }
    }
    return configs;
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} color={0x404060} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <pointLight position={[0, 0, 0]} color={ACCENT} intensity={1.5} distance={10} />

      <CoreSphere />

      {RING_TILTS.map((tilt, i) => (
        <OrbitalRing key={i} radius={3.2} tilt={tilt} pulseOffset={i * 2} />
      ))}

      {nodeConfigs.map((cfg, i) => (
        <OrbitalNode key={i} {...cfg} />
      ))}

      <BackgroundParticles count={120} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.4}
          intensity={0.8}
        />
      </EffectComposer>
    </>
  );
}

/* ── Exported component ─── */
export default function HeroScene3D() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '55%',
        zIndex: 1,
        pointerEvents: 'auto',
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
