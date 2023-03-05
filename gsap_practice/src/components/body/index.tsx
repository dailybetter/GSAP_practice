import * as Styled from './styled';
import { BodyTitle } from './common/BodyTitle';
import { FadeInContent } from '../gsap/FadeinContent';
import { FadeInUnderLine } from '../gsap/FadeinUnderLine';
import { LIGHT_GREEN } from '../../colorPalette';
export const Body = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <FadeInContent delay={0.3}>Introduce2</FadeInContent>
        <FadeInUnderLine delay={1} color={LIGHT_GREEN}>
          Introduce2
        </FadeInUnderLine>
      </Styled.Contents>
    </Styled.Container>
  );
};
