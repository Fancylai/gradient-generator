import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import styled from 'styled-components';
import ConfigPanel from './components/ConfigPanel';
import PreviewArea from './components/PreviewArea';
import ExportButton from './components/ExportButton';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 32px;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

function App() {
  const [config, setConfig] = useState({
    colors: [
      { color: '#ff0000', position: 0 },
      { color: '#00ff00', position: 33 },
      { color: '#0000ff', position: 66 },
      { color: '#8800ff', position: 100 }
    ],
    speed: 5,
    blur: 100,
    randomness: 0
  });

  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <LeftPanel>
          <ConfigPanel config={config} onConfigChange={setConfig} />
          <ExportButton config={config} />
        </LeftPanel>
        <RightPanel>
          <PreviewArea config={config} />
        </RightPanel>
      </ContentWrapper>
    </AppContainer>
  );
}

const LeftPanel = styled.div`
  flex: 0 0 360px;
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
`;

const RightPanel = styled.div`
  flex: 1;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export default App;
