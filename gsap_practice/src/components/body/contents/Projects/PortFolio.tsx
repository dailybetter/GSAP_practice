import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const MyPortfolio = () => {
  return (
    <>
      <Styled.CardContentTitle>MyPortfolio</Styled.CardContentTitle>
      <Styled.CardContentPeriod>2023-03 . 2주 . 개인프로젝트</Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 나만의 포트폴리오 개발</Styled.CardExPlain>
        <Styled.CardExPlain>✔ GSAP을 활용한 애니메이션 구현</Styled.CardExPlain>
        <Styled.CardMediumTitle>Used</Styled.CardMediumTitle>
        <Styled.CardExPlain>
          🔧 React, TypeScript, GSAP, Styled-Component
        </Styled.CardExPlain>
        <Styled.CardMediumTitle>Links</Styled.CardMediumTitle>
        <Links
          text="My Portfolio GitHub"
          href="https://github.com/dailybetter/GSAP_practice"
        />
      </Styled.CardExplainContainer>
    </>
  );
};
