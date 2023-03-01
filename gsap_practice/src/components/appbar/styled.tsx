import styled from 'styled-components';
import Link from '@mui/material/Link';
import { LIGHT_GREEN } from '../../colorPalette';

export const MyLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 30px;
  padding: 10px;

  background-size: 200%;
  '&:hover': {
    color: '#000000';
  }

  transition: 0.3s ease;
`;
