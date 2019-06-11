import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import RouterConfig from './routerConfig';

const routers = () => (
  <HashRouter>
    <Switch>
      {RouterConfig.map(item => (
        <Route
          key={item.path}
          exact={true}
          path={item.path}
          component={item.component}
        />
      ))}
    </Switch>
  </HashRouter>
);

export default routers;
