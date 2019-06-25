import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {iRoute} from "@models/global.interface";
import {sortG6Router} from './router/index';

const Product: React.FC = () => {
  return (
    <div className="product">
      <Switch>
        <Redirect from="/g6" to={"/g6/demo"} exact />
        {sortG6Router.map((item: iRoute) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          )
        })}
      </Switch>
    </div>
  );
}


export default Product;