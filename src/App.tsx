import React from 'react';
import BasicLayout from '@layouts/basic-layout/BasicLayout';
import {HashRouter} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
      <BasicLayout />
    </HashRouter>
  );
}

export default App;
