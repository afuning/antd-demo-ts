import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {iRoute} from "@models/global.interface";
import {sortProductRouter} from './router/index';

const Product: React.FC = () => {
  return (
    <div className="product">
      <Switch>
        <Redirect from="/" to={"/sms-domestic/handle"} exact />
        {sortProductRouter.map((item: iRoute) => {
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
    </div>
  );
}


export default Product;