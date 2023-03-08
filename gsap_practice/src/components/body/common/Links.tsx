import styled from 'styled-components';
import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

interface LinkProps {
  text: string;
  href: string;
}

const LinkText = styled.a`
  background: linear-gradient(to right, transparent 50%, rgb(130, 205, 71) 50%);
  background-size: 200%;
  background-position: 0 0;
  font-family: 'SpoqaThin';
  font-size: 20px;
  color: Black;
  text-decoration: underline;
  text-underline-offset: 3.5px;
  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
    color: White;
  }
`;
export const Links = ({ text, href }: LinkProps) => {
  if (text.includes('GitHub')) {
    return (
      <p style={{ margin: 0 }}>
        <LinkText href={href} target="_blank">
          <GitHubIcon /> {text}
        </LinkText>
      </p>
    );
  }
  return (
    <p style={{ margin: 0 }}>
      <LinkText href={href} target="_blank">
        <LinkIcon /> {text}
      </LinkText>
    </p>
  );
};
