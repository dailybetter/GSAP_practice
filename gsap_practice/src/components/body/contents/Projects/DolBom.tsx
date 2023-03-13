import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const DolBom = () => {
  return (
    <>
      <Styled.CardContentTitle>DolBom</Styled.CardContentTitle>
      <Styled.CardContentPeriod>
        2023-01 . 6weeks . 팀프로젝트 백엔드 3 프론트 2
      </Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 상담사를 위한 비대면 상담플랫폼</Styled.CardExPlain>
        <Styled.CardExPlain>✔ 캘린더 기능과 드라이브 기능 개발 담당</Styled.CardExPlain>
        <Styled.CardExPlain>
          ✔ GitHub README를 통해 구현된 기능에 대한 gif를 확인해주세요!
        </Styled.CardExPlain>
        <Styled.CardMediumTitle>Used</Styled.CardMediumTitle>
        <Styled.CardExPlain>
          🔧 React : 다양한 라이브러리와 도구들이 존재하고, Vue와 비교했을 때 더 자유도가
          높은 개발환경을 제공한다고 생각하여 사용했습니다.
        </Styled.CardExPlain>
        <Styled.CardExPlain>
          🔧 MUI : 정해진 시간 안에 빠르게 진행해야하는 프로젝트 였고, 반응형 디자인
          제공해주기 때문에 사용했습니다. 사용하였습니다.
        </Styled.CardExPlain>
        <Styled.CardExPlain>
          🔧 VITE : HotModuleReplace를 통해 코드 결과를 빠르게 확인할 수 있기 때문에
          사용했습니다.
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
