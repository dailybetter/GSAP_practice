import styled from 'styled-components';

export const BodyTitle = ({ title }: { title: string }) => {
  return <StyledBodyTitle>{title}</StyledBodyTitle>;
};

const StyledBodyTitle = styled.div`
  font-size: 70px;
  font-family: 'SpoqaHanSans', sans-serif;
  margin: 0;
`;
