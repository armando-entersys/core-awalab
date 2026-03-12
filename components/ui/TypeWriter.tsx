'use client';

import { useEffect, useState } from 'react';
import { Typography, type TypographyProps } from '@mui/material';

interface TypeWriterProps extends Omit<TypographyProps, 'children'> {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  sx,
  ...props
}: TypeWriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <Typography
      component="span"
      sx={{
        '&::after': {
          content: '"|"',
          animation: 'blink 1s step-end infinite',
          ml: 0.5,
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        },
        ...sx,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
}
