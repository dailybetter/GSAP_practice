import styled from 'styled-components';
import { DARK_GREEN } from '../..//colorPalette';
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
  padding: 40px;
  color: black;
`;

export const StyledBodyTitle = styled.div`
  font-size: 70px;
  font-family: 'SpoqaBold';
  font-weight: bold;
  margin: 0;
  column-gap: 20px;
`;

export const BodyContent = styled.div`
  font-size: 30px;
  font-family: 'SpoqaMedium';
  font-weight: normal;
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
  font-family: 'SpoqaThin';
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
