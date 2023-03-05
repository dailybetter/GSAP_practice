import * as Styled from './styled';
import { BodyTitle } from './common/BodyTitle';
import { FadeInContent } from '../gsap/FadeinContent';
export const Body = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <FadeInContent delay={0.3}>
          <BodyTitle title="Introduce" />
        </FadeInContent>
      </Styled.Contents>
    </Styled.Container>
  );
};
