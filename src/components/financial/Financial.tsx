import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {iRoute} from "@models/global.interface";
import {sortFinancialRouter} from './router/index';

const Product: React.FC = () => {
  return (
    <div className="financial">
      <Switch>
        <Redirect from="/financial" to={"/financial/recharge"} exact />
        {sortFinancialRouter.map((item: iRoute) => {
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