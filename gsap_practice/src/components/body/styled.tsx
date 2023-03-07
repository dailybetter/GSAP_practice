import styled from 'styled-components';

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
`;
export const CardContentArea = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0, 10vw;
`;
