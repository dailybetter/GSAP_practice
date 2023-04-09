import styled from 'styled-components';
import Link from '@mui/material/Link';

export const MyLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  padding: 10px;
  font-family: 'SpoqaThin'
  background-size: 200%;
  '&:hover': {
    color: '#000000';
  }

  transition: 0.3s ease;
`;

export const Title = styled.div`
  font-family: 'SpoqaThin', sans-serif;
  font-size: 25px;
  flex-grow: 1;
  font-weight: bold;
  @media ${(props) => props.theme.tablet} {
    font-family: 'SpoqaMedium'
    font-size: 18px;
  }
  @media ${(props) => props.theme.mobile} {
    font-family: 'SpoqaBold'
    font-size: 20px;
  }
`;
