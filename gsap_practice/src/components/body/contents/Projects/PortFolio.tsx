import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const MyPortfolio = () => {
  return (
    <>
      <Styled.CardContentTitle>MyPortfolio</Styled.CardContentTitle>
      <Styled.CardContentPeriod>2023-03 . 2weeks . 개인프로젝트</Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 나만의 포트폴리오 개발</Styled.CardExPlain>
        <Styled.CardExPlain>✔ GSAP을 활용한 애니메이션 구현</Styled.CardExPlain>
        <Styled.CardMediumTitle>Used</Styled.CardMediumTitle>
        <Styled.CardExPlain>
          🔧 GSAP : 애니메이션을 쉽고 유연하게 구현하기 위해 사용했습니다. 같은 기능을
          하는 다른 라이브러리들 보다 커뮤니티가 크고 자료가 많다는 장점이 있습니다.
        </Styled.CardExPlain>
        <Styled.CardExPlain>
          🔧 Styled-Component : 컴포넌트 위주의 개발을 진행할 예정이었기 때문에 CSS-in-JS
          중 숙련도가 있는 Styled-Component를 사용하였습니다.
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
