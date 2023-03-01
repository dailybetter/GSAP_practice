import gsap from 'gsap';
import React from 'react';
import { useRef, useEffect } from 'react';
import * as Styled from './styled';
import { LIGHT_YELLOW } from '../../colorPalette';
import { UnderLine } from '../UnderLine/UnderLine';
import { MyAppBar } from '../appbar/index';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
export const Intro = () => {
  const h1 = useRef(null);
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        '.one',
        { duration: 1, opacity: 0, y: 0 },
        { duration: 1, opacity: 1, y: 50 },
      )
      .fromTo(
        '.two',
        { duration: 1, opacity: 0, y: 0 },
        { duration: 1, opacity: 1, y: 50 },
        '-=0.3',
      )
      .fromTo(
        '.tre',
        { duration: 1, opacity: 0, y: 0 },
        { duration: 1, opacity: 1, y: 50 },
        '-=0.3',
      );
  }, []);
  return (
    <Styled.Container>
      <Styled.MainAppBar />
      <Styled.Main>
        <Styled.BodyTextContainer>
          <Styled.BodyText className="one">안녕하세요</Styled.BodyText>
          <Styled.BodyText className="two">프론트엔드 개발자를 희망하는</Styled.BodyText>
          <Styled.BodyText className="tre">
            <UnderLine color={LIGHT_YELLOW} delay={2.5}>
              박현우
            </UnderLine>
            입니다.
          </Styled.BodyText>
        </Styled.BodyTextContainer>
        <Styled.BackgrouundImg>
          <img src="/moon.jpg" alt="background" draggable={false} />
        </Styled.BackgrouundImg>
        <Styled.IconContainer>
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Styled.IconContainer>
      </Styled.Main>
    </Styled.Container>
  );
};
