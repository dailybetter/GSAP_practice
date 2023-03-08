import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '600px',
  desktop: '1080px',
};

export const theme: DefaultTheme = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.desktop})`,
  desktop: `screen and (min-width: ${size.desktop})`,
};
