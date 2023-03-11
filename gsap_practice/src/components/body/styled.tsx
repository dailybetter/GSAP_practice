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
  margin: 0vh 10vh;
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
export const CardContentPeriod = styled.span`
  font-size: 18px;
  font-family: 'SpoqaThin';
`;

export const CardExplainContainer = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  margin-top: 30px;
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
  width: 90vw;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'SpoqaRegular';
  font-size: 15px;
  margin: 100px 0px;

  a {
    text-decoration: none;
    font-size: 16px;
    color: ${LIGHT_GREEN};
    :hover {
      color: ${DARK_GREEN};
    }
  }
`;
