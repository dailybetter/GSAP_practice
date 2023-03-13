import gsap from 'gsap';
import React from 'react';
import { useEffect } from 'react';
import * as Styled from './styled';
import { LIGHT_GREEN } from '../../colorPalette';
import { UnderLine } from '../gsap/UnderLine';
export const Intro = () => {
  useEffect(() => {
    gsap.defaults({ duration: 1 });
    gsap
      .timeline()
      .fromTo('.one', { opacity: 0, y: 0 }, { opacity: 1, y: 50 })
      .fromTo('.two', { opacity: 0, y: 0 }, { opacity: 1, y: 50 }, '-=0.3')
      .fromTo('.tre', { opacity: 0, y: 0 }, { opacity: 1, y: 50 }, '-=0.3');
  }, []);
  const viewportDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.MainAppBar />
        <Styled.BodyTextContainer>
          <Styled.BodyText className="one">UX에 대해 고민하는</Styled.BodyText>
          <Styled.BodyText className="two">FE 개발자</Styled.BodyText>
          <Styled.BodyText className="tre">
            <UnderLine color={LIGHT_GREEN} delay={2.5}>
              박현우
            </UnderLine>
            입니다.
          </Styled.BodyText>
        </Styled.BodyTextContainer>
        <Styled.BackgrouundImg>
          <img src="/main_web.jpg" alt="background" draggable={false} />
        </Styled.BackgrouundImg>
        <Styled.IconContainer>
          <Styled.ArrowDownButton
            fontSize="large"
            onClick={viewportDown}
            style={{ fontSize: '3rem' }}
          />
        </Styled.IconContainer>
      </Styled.Main>
    </Styled.Container>
  );
};
