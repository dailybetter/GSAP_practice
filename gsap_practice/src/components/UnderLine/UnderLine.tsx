import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactChild, ReactChildren, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Color {
  color: string;
}

interface UnderlineProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
  color: string;
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
