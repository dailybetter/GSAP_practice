import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #202224;
  color: white;

  //   @media ${(props) => props.theme.tablet} {
  //     flex-direction: column;
  //     height: 150vh;
  //   }
`;

export const Main = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  //   @media ${(props) => props.theme.tablet} {
  //     width: 100vw;
  //     height: 200vh;
  //   }

  //   @media ${(props) => props.theme.mobile} {
  //     width: 100vw;
  //     height: 200vh;
  //   }
`;
export const BackgrouundImg = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.5;
  width: 100vw;
  text-align: center;
  img {
    width: 80vw;
    height: 100vh;
    object-fit: cover;
  }
`;

// middle intro h2
export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;
export const BodyText = styled.span`
  font-size: 30px;
  opacity: 1;
`;
