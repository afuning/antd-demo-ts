import React from 'react';
import BasicLayout from '@layouts/basic-layout/BasicLayout';
import { Provider } from 'mobx-react';
import { RootStore } from '@store/index';
import {HashRouter, Router} from 'react-router-dom';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, RootStore.routerStore);
const App: React.FC = () => {
  return (
    <Provider {...RootStore}>
      <HashRouter>
        <Router history={history}>
          <BasicLayout />
        </Router>
      </HashRouter>
    </Provider>
  );
}

export default App;
