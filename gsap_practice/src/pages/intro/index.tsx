import gsap from 'gsap';
import React from 'react';
import { useRef, useEffect } from 'react';
import * as Styled from './styled';

export const IntroPage = () => {
  const h1 = useRef(null);
  useEffect(() => {
    gsap.to('h1', { x: 400 });
  });
  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.BackgrouundImg>
          <div>
            <img src="/main.jpg" alt="background" />
          </div>
        </Styled.BackgrouundImg>
      </Styled.Main>
    </Styled.Container>
  );
};
