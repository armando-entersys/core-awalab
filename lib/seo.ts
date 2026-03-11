import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function generatePageMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'es_MX',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
