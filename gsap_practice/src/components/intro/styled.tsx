import styled from 'styled-components';
import { MyAppBar } from '../appbar';
import { LIGHT_GREEN, DARK_GREEN } from '../../colorPalette';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
export const Container = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #202224;
  color: white;

  @media ${(props) => props.theme.tablet} {
    position: relative;
    flex-direction: column;
    height: 100vh;
  }
`;

export const Main = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  @media ${(props) => props.theme.tablet} {
    width: 100vw;
    height: 100vh;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    height: 100vh;
  }
`;
export const BackgrouundImg = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  text-align: center;
  img {
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

// middle intro h2
export const BodyTextContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  z-index: 1;
  @media ${(props) => props.theme.tablet} {
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 30px;
  }
`;
export const BodyTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const BodyText = styled.div`
flex
opacity: 1;
margin-left: 50vw;
font-family: 'SpoqaBold', sans-serif;
font-weight: bold;
font-size: 40px;
@media ${(props) => props.theme.tablet} {
    font-size: 30px;
  }
  `;

export const IconContainer = styled.div`
  position: absolute;
  right: 3vw;
  bottom: 2vw;
  opacity: 1;
`;

export const MainAppBar = styled(MyAppBar)`
  position: absolute;
  z-index: 2;
`;

export const ArrowDownButton = styled(KeyboardDoubleArrowDownIcon)`
  &:hover {
    color: ${LIGHT_GREEN};
    cursor: pointer;
    transition: 1s;
  }
`;
