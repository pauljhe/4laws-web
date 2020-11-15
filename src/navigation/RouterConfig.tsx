import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FourLaws from '../pages/FourLaws';
import { Routes } from './constants';


const RouterConfig: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path={Routes.FOUR_LAWS_PAGE} component={FourLaws} />
      <Redirect to={Routes.FOUR_LAWS_ROOT} />
    </Switch>
  );
};

export default RouterConfig;
