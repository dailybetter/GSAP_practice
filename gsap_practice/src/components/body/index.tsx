import * as Styled from './styled';
import { FadeInContent } from '../gsap/FadeinContent';
import { LIGHT_GREEN } from '../../colorPalette';
import { UnderLine } from '../gsap/UnderLine';
import { IntroContents } from './contents/IntroContents';
import { DolBom } from './contents/Projects/DolBom';
import { MyPortfolio } from './contents/Projects/PortFolio';
import { FadeInUp } from '../gsap/FadeinUp';
import { Ssafy } from './contents/Educations/Ssafy';
import ConfettiExplosion from 'react-confetti-explosion';
// import { Wanted } from './contents/Educations/Wanted';
import { MyBlog } from './contents/Projects/Blog';
import { FadeInOpacity } from '../gsap/FadeinOpacity';
import { Works } from './contents/Works';
import { useState } from 'react';
export const Body = () => {
  const [isExploding, setIsExploding] = useState(false);
  const EmailClick = () => {
    setIsExploding(!isExploding);
  };
  const tinyExplodeProps = {
    force: 0.4,
    duration: 5000,
    particlecount: 30,
    floorheight: 500,
    floorwidth: 300,
  };
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Card>
          <Styled.StyledBodyTitle>
            <FadeInContent delay={1}>
              <UnderLine color={LIGHT_GREEN} delay={1}>
                Introduce
              </UnderLine>
            </FadeInContent>
          </Styled.StyledBodyTitle>
          <FadeInUp delay={0.3}>
            <Styled.IntroContainer>
              <Styled.CardContentArea>
                <IntroContents />
              </Styled.CardContentArea>
            </Styled.IntroContainer>
          </FadeInUp>
        </Styled.Card>
        <Styled.Divider />
        <Styled.Card>
          <Styled.StyledBodyTitle>
            <FadeInContent delay={1}>
              <UnderLine color={LIGHT_GREEN} delay={1}>
                Project
              </UnderLine>
            </FadeInContent>
          </Styled.StyledBodyTitle>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <DolBom />
            </Styled.CardTitleArea>
            {/* <Styled.CardContentArea></Styled.CardContentArea> */}
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <MyPortfolio />
            </Styled.CardTitleArea>
            <Styled.CardContentArea></Styled.CardContentArea>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <MyBlog />
            </Styled.CardTitleArea>
            <Styled.CardContentArea></Styled.CardContentArea>
          </FadeInUp>
        </Styled.Card>
        <Styled.Divider />
        <Styled.Card>
          <Styled.StyledBodyTitle>
            <FadeInContent delay={1}>
              <UnderLine color={LIGHT_GREEN} delay={1}>
                Works
              </UnderLine>
            </FadeInContent>
          </Styled.StyledBodyTitle>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <Works />
            </Styled.CardTitleArea>
          </FadeInUp>
        </Styled.Card>
        <Styled.Divider />
        <Styled.Card>
          <Styled.StyledBodyTitle>
            <FadeInContent delay={1}>
              <UnderLine color={LIGHT_GREEN} delay={1}>
                Education
              </UnderLine>
            </FadeInContent>
          </Styled.StyledBodyTitle>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <Ssafy />
            </Styled.CardTitleArea>
          </FadeInUp>
        </Styled.Card>
        <FadeInOpacity delay={0.3}>
          <Styled.Footer>
            {isExploding && <ConfettiExplosion {...tinyExplodeProps} />}
            관심으로 읽어주셔서 감사합니다. 연락주신다면 24시간 내로 답변 드리겠습니다.
            <br />
            <a href="mailto:rth634@naver.com" onClick={EmailClick}>
              rth634@naver.com
            </a>
          </Styled.Footer>
        </FadeInOpacity>
      </Styled.Contents>
    </Styled.Container>
  );
};
