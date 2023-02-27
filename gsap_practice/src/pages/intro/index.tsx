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
        <Styled.BodyTextContainer>
          <Styled.BodyText>안녕하세요</Styled.BodyText>
          <Styled.BodyText>프론트엔드 개발자를 희망하는</Styled.BodyText>
          <Styled.BodyText>박현우 입니다.</Styled.BodyText>
        </Styled.BodyTextContainer>
        <Styled.BackgrouundImg>
          <img src="/main.jpg" alt="background" draggable={false} />
        </Styled.BackgrouundImg>
      </Styled.Main>
    </Styled.Container>
  );
};
