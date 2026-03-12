'use client';

import { useRef, useState } from 'react';
import { Card, type CardProps } from '@mui/material';

interface GlowCardProps extends CardProps {
  glowColor?: string;
  glowIntensity?: number;
}

export function GlowCard({
  children,
  glowColor = 'rgba(10, 135, 198, 0.15)',
  glowIntensity = 300,
  sx,
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setGlow((prev) => ({ ...prev, visible: false }));
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: glowIntensity,
          height: glowIntensity,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          left: glow.x - glowIntensity / 2,
          top: glow.y - glowIntensity / 2,
          opacity: glow.visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0,
        },
        '& > *': { position: 'relative', zIndex: 1 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
}
