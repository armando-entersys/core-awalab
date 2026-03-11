import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/styles/theme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Soluciones Industriales`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <a className="skip-to-content" href="#main-content">
              Ir al contenido
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <WhatsAppFAB />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
