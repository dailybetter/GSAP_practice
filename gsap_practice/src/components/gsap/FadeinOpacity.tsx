import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface TextProps {
  children?: React.ReactNode;
  delay: number;
}

export const FadeInOpacity = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      target.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: target.current,
          toggleActions: 'play none none none',
        },
        top: '-15%',
        opacity: 1,
        delay,
        duration: 1.5,
        ease: 'power3.out',
      },
    );
  }, [delay]);
  return <div ref={target}>{children}</div>;
};
