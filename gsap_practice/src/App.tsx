import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Intro } from './components/intro';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './index.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const theme = createTheme({
  typography: {
    // fontFamily: `'SpoqaHanSans', sans-serif'`,
  },
});
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Section>
          <Intro />
        </Section>
      </ThemeProvider>
    </>
  );
}

export default App;
