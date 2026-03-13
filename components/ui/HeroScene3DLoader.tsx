'use client';

import dynamic from 'next/dynamic';

const HeroScene3D = dynamic(() => import('./HeroScene3D'), {
  ssr: false,
  loading: () => null,
});

export function HeroScene3DLoader() {
  return <HeroScene3D />;
}
