import React from 'react';
import BasicLayout from '@layouts/basic-layout/BasicLayout';
import Routers from '@/router/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <BasicLayout>
        <Routers />
      </BasicLayout>
    </div>
  );
}

export default App;
