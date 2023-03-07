import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const DolBom = () => {
  return (
    <>
      <Styled.CardContentTitle>DolBom</Styled.CardContentTitle>
      <Styled.CardContentPeriod>2023 Jan . 6weeks . TeamProject</Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 상담사를 위한 비대면 상담플랫폼 개발</Styled.CardExPlain>
        <Styled.CardExPlain>✔ 캘린더 기능과 드라이브 기능 개발 담당</Styled.CardExPlain>
        <Links
          text="예시"
          href="https://dailybetter.github.io/retrospective/projectRet/"
        />
      </Styled.CardExplainContainer>
    </>
  );
};
