import styled from 'styled-components';
import { DARK_GREEN, LIGHT_GREEN } from '../..//colorPalette';
export const Container = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  background-color: rgb(245, 245, 245);
`;

export const Contents = styled.article`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0vw 10vh;
  padding: 40px;
  color: black;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: 100vw;
    margin: 0;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    margin: 0;
  }
`;

export const StyledBodyTitle = styled.div`
  font-size: 70px;
  font-family: 'SpoqaBold';
  font-weight: bold;
  margin: 0;
  column-gap: 20px;
`;

export const IntroContainer = styled.article`
  display: flex;
  flex-direction: row;
`;
export const ImgWrapper = styled.div`
  height: auto;
  img {
    width: 30vw;
    max-width: 338px;
  }
`;
export const IntroBodyContent = styled.div`
  font-family: 'SpoqaMedium';
  font-size: 25px;
  font-weight: normal;
  @media ${(props) => props.theme.tablet} {
    font-family: 'SpoqaRegular';
    font-size: 20px;
    max-width: 80%;
  }
  @media ${(props) => props.theme.mobile} {
    font-family: 'SpoqaRegular';
    font-size: 15px;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  position: relative;
  padding: 10vh 0px 0px 0px;
`;

export const CardContentArea = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5vh 0px 0px 10vw;
`;
export const CardTitleArea = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5vh 0px 0px 5vw;
`;

export const CardContentTitle = styled.span`
  font-size: 45px;
  font-family: 'SpoqaMedium';

  @media ${(props) => props.theme.mobile} {
    font-family: 'SpoqaBold';
    font-size: 45px;
  }
`;
export const CardContentPeriod = styled.div`
  font-size: 18px;
  font-family: 'SpoqaThin';
  margin-bottom: 1em;
`;

export const WorkCardExplainContainer = styled.article`
  display: flex;
  flex-direction: row;
  row-gap: 5vh;
  margin-top: 30px;
`;
export const JobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  @media ${(props) => props.theme.tablet} {
    width: 20vw;
  }
`;
export const JobTitle = styled.span`
  font-family: 'SpoqaMedium';
  font-size: 30px;
  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
  }
`;
export const JobPeriod = styled.span`
  font-family: 'SpoqaThin';
  font-size: 10px;
  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }
`;
export const CardExplainContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  row-gap: 7px;
`;

export const WorkCardExPlain = styled.div`
  font-family: 'SpoqaRegular';
  font-size: 20px;
  padding-left: 3vw;
  @media ${(props) => props.theme.tablet} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.mobile} {
    opacity: 0;
  }
`;
export const CardExPlain = styled.div`
  font-family: 'SpoqaRegular';
  font-size: 20px;
`;
export const CardMediumTitle = styled.div`
  font-family: 'SpoqaMedium';
  font-size: 30px;
  margin: 10px 0px;
`;
export const Divider = styled.div`
  height: 6.5px;
  margin-top: 30px;
  background-color: ${DARK_GREEN};
  width: 80vw;
  @media ${(props) => props.theme.tablet} {
    font-family: 'SpoqaBold';
    font-size: 45px;
    width: 90vw;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'SpoqaRegular';
  font-size: 15px;
  margin: 50px 0px;

  a {
    text-decoration: none;
    font-size: 16px;
    color: ${LIGHT_GREEN};
    :hover {
      color: ${DARK_GREEN};
    }
  }
`;
