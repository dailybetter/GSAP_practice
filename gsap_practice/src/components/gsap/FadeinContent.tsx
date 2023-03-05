import gsap from 'gsap';
import React, { ReactChild, ReactChildren, useEffect, useRef } from 'react';

interface TextProps {
  children?: React.ReactNode;
  delay: number;
}

export const FadeInContent = ({ children, delay }: TextProps) => {
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
  return <div ref={target}>{children}</div>;
};
