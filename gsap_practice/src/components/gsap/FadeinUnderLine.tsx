import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FadeInContent } from './FadeinContent';

interface TextProps {
  children?: React.ReactNode;
  delay: number;
}

const UnderlineContainer = styled.span`
  background-image: linear-gradient(
    transparent 80%,
    ${(props: Color) => props.color} 20%
  );
  background-size: 0% 100%;
  background-repeat: no-repeat;
  z-index: -1;
`;

interface Color {
  color: string;
}

interface UnderlineProps {
  children?: React.ReactNode;
  delay: number;
  color: string;
}

export const UnderLine = ({ delay, children, color }: UnderlineProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      backgroundImage: `linear-gradient(transparent 80%, ${color} 20%)`,
      backgroundSize: '100% 100%',
      delay,
      duration: 0.6,
      ease: 'expo.out',
    });
  }, [delay, color]);
  return (
    <UnderlineContainer color={color} ref={target}>
      {children}
    </UnderlineContainer>
  );
};

interface FadeInContentWithUnderlineProps {
  children?: React.ReactNode;
  delay?: number;
  color?: string;
}

export const FadeInUnderLine = ({
  children,
  delay = 0,
  color = '#000',
}: FadeInContentWithUnderlineProps) => {
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
        delay,
        duration: 0.5,
        ease: 'power3.out',
      },
    );
  }, [delay]);

  return (
    <div ref={target}>
      <UnderLine delay={delay + 1} color={color}>
        {children}
      </UnderLine>
    </div>
  );
};
