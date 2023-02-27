import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { IntroPage } from './pages/intro';
import { YoyoPage } from './pages/yoyo';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: colum;
`;
function App() {
  return (
    <Section>
      {/* <IntroPage /> */}
      <YoyoPage />
    </Section>
  );
}

export default App;
