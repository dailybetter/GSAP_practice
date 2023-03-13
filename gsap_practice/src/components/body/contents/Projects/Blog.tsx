import * as Styled from '../../styled';
import { Links } from '../../common/Links';
export const MyBlog = () => {
  return (
    <>
      <Styled.CardContentTitle>MyBlog</Styled.CardContentTitle>
      <Styled.CardContentPeriod>
        2022-04 . 2weeks . 개인 프로젝트
      </Styled.CardContentPeriod>
      <Styled.CardExplainContainer>
        <Styled.CardExPlain>✔ 나만의 블로그 개발</Styled.CardExPlain>
        <Styled.CardExPlain>
          ✔ Minimul-mistake 템플릿을 활용한 블로그 개발
        </Styled.CardExPlain>
        <Styled.CardExPlain>✔ Giscuc를 이용한 댓글 구현</Styled.CardExPlain>
        <Styled.CardExPlain>✔ 개발을 시작하며 처음 만든 블로그</Styled.CardExPlain>
        <Styled.CardMediumTitle>Links</Styled.CardMediumTitle>
        <Links
          text="My Blog GitHub"
          href="https://github.com/dailybetter/dailybetter.github.io/blob/master/README.md"
        />
        <Links text="My Blog" href="https://dailybetter.github.io/" />
      </Styled.CardExplainContainer>
    </>
  );
};
