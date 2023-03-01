import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { IntroPage } from './components/intro';
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
      <IntroPage />
    </Section>
  );
}

export default App;
