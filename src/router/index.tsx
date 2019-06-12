import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import RouterConfig from './routerConfig';

const routers = () => (
  <Switch>
    <Redirect from="/" to={RouterConfig[0].path} exact />
    {RouterConfig.map(item => {
      console.log(item);
      return (
        <Route
          key={item.path}
          path={item.path}
          component={item.component}
        />
      )
    })}
  </Switch>
);

export default routers;
