import * as Styled from './styled';
import { BodyTitle } from './common/BodyTitle';
import { FadeInContent } from '../gsap/FadeinContent';
import { FadeInUnderline } from '../gsap/FadeinUnderLine';
import { LIGHT_GREEN } from '../../colorPalette';
import { UnderLine } from '../gsap/UnderLine';
export const Body = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.StyledBodyTitle>
          <FadeInContent delay={1}>
            <UnderLine color={LIGHT_GREEN} delay={1}>
              Introduce
            </UnderLine>
          </FadeInContent>
        </Styled.StyledBodyTitle>
      </Styled.Contents>
    </Styled.Container>
  );
};
