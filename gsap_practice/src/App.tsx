import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { IntroPage } from './components/intro';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: colum;
`;
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <Section>
      {/* <IntroPage /> */}
      <IntroPage />
    </Section>
  );
}

export default App;
