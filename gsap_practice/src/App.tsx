import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Intro } from './components/intro';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './index.css';
import { Body } from './components/body';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SpoqaBold';
    src: url('/fonts/SpoqaHanSansNeo-Bold.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaMedium';
    src: url('/fonts/SpoqaHanSansNeo-Medium.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;
const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
function App() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Intro />
        <Body />
      </Section>
    </>
  );
}

export default App;
