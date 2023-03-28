import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const DolBom = () => {
  return (
    <>
      <Styled.CardContentTitle>DolBom</Styled.CardContentTitle>
      <Styled.CardContentPeriod>
        2023-01 . 6주 . 팀프로젝트 백엔드 3 프론트 2
      </Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 상담사를 위한 비대면 상담 웹 서비스</Styled.CardExPlain>
        <Styled.CardExPlain>✔ 캘린더 기능과 드라이브 기능 개발 담당</Styled.CardExPlain>
        <Styled.CardMediumTitle>Used</Styled.CardMediumTitle>
        <Styled.CardExPlain>
          🔧 React , TypeScript , Redux, React-Query , MUI
        </Styled.CardExPlain>
        <Styled.CardMediumTitle>Links</Styled.CardMediumTitle>
        <Links
          text="돌봄 프로젝트 GitHub"
          href="https://github.com/dailybetter/DOLBOMpjt"
        />
        <Links
          text="프로젝트를 진행하며 고민했던 것들 "
          href="https://dailybetter.github.io/retrospective/pjtRet/"
        />
      </Styled.CardExplainContainer>
    </>
  );
};
