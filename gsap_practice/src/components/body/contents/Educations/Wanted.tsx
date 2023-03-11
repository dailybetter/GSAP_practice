import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const Wanted = () => {
  return (
    <>
      <Styled.CardContentTitle>원티드 TypeScript 챌린지</Styled.CardContentTitle>
      <Styled.CardContentPeriod>2022 Feb . 2weeks</Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>
          ✔ TypeScript에 대한 이해와 견문을 넓히고자 참여
        </Styled.CardExPlain>
        <Styled.CardMediumTitle>Links</Styled.CardMediumTitle>
        <Links
          text="2차 과제 Github"
          href="https://github.com/dailybetter/wanted-pre-onboarding-challenge-fe-ts"
        />
        <Links
          text="원티드 TypeScript 챌린지 회고"
          href="https://dailybetter.github.io/retrospective/wantedChallenge/"
        />
      </Styled.CardExplainContainer>
    </>
  );
};
