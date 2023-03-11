import * as Styled from './styled';
import { FadeInContent } from '../gsap/FadeinContent';
import { LIGHT_GREEN } from '../../colorPalette';
import { UnderLine } from '../gsap/UnderLine';
import { IntroContents } from './contents/IntroContents';
import { DolBom } from './contents/Projects/DolBom';
import { MyPortfolio } from './contents/Projects/PortFolio';
import { FadeInUp } from '../gsap/FadeinUp';
import { Ssafy } from './contents/Educations/Ssafy';
import { Wanted } from './contents/Educations/Wanted';
import { MyBlog } from './contents/Projects/Blog';
export const Body = () => {
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
              <Styled.ImgWrapper>
                <img src="/aicon.jpg" alt="Myprofile" />
              </Styled.ImgWrapper>
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
                Education
              </UnderLine>
            </FadeInContent>
          </Styled.StyledBodyTitle>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <Ssafy />
            </Styled.CardTitleArea>
            {/* <Styled.CardContentArea></Styled.CardContentArea> */}
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <Styled.CardTitleArea>
              <Wanted />
            </Styled.CardTitleArea>
            <Styled.CardContentArea></Styled.CardContentArea>
          </FadeInUp>
        </Styled.Card>
      </Styled.Contents>
    </Styled.Container>
  );
};
