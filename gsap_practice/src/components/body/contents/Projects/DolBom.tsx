import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const DolBom = () => {
  return (
    <>
      <Styled.CardContentTitle>DolBom</Styled.CardContentTitle>
      <Styled.CardContentPeriod>2023 Jan . 6weeks . TeamProject</Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 상담사를 위한 비대면 상담플랫폼</Styled.CardExPlain>
        <Styled.CardExPlain>✔ 캘린더 기능과 드라이브 기능 개발 담당</Styled.CardExPlain>
        <Styled.CardExPlain>
          ✔ GitHub README를 통해 구현된 기능에 대한 gif를 확인해주세요!
        </Styled.CardExPlain>
        <Styled.CardMediumTitle>Links</Styled.CardMediumTitle>
        <Links
          text="돌봄 프로젝트 GitHub"
          href="https://github.com/dailybetter/DOLBOMpjt"
        />
        <Links
          text="돌봄 프로젝트 전반적 회고 "
          href="https://dailybetter.github.io/retrospective/projectRet/"
        />
        <Links
          text="프로젝트를 진행하며 고민했던 것 들 "
          href="https://dailybetter.github.io/retrospective/pjtRet/"
        />
      </Styled.CardExplainContainer>
    </>
  );
};
