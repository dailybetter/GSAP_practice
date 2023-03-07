import * as Styled from './styled';
import { FadeInContent } from '../gsap/FadeinContent';
import { LIGHT_GREEN } from '../../colorPalette';
import { UnderLine } from '../gsap/UnderLine';
import { IntroContents } from './contents/IntroContents';
import { DolBom } from './contents/Projects/DolBom';
import { FadeInUp } from '../gsap/FadeinUp';
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
            <Styled.CardContentArea>
              <IntroContents />
            </Styled.CardContentArea>
          </FadeInUp>
        </Styled.Card>
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
            <Styled.CardContentArea></Styled.CardContentArea>
          </FadeInUp>
        </Styled.Card>
      </Styled.Contents>
    </Styled.Container>
  );
};
