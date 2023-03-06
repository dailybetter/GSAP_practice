import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { UnderLine } from './UnderLine';
import { LIGHT_GREEN } from '../../colorPalette';
interface TextProps {
  children?: React.ReactNode;
  delay: number;
}

export const FadeInUnderline = ({ children, delay }: TextProps) => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      target.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: target.current,
          toggleActions: 'restart none none none',
        },
        opacity: 1,
        delay: 0.3,
        duration: 1.5,
        ease: 'power3.out',
      },
    );
  }, []);
  return (
    <UnderLine color={LIGHT_GREEN} delay={2.5}>
      <div ref={target}>{children}</div>;
    </UnderLine>
  );
};
