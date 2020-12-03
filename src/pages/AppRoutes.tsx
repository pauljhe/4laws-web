import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FourLaws from './FourLaws';

export enum AppPaths {
  FOUR_LAWS = '/4laws'
}

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={AppPaths.FOUR_LAWS} component={FourLaws} />
      <Redirect exact to={AppPaths.FOUR_LAWS} />
    </Switch>
  );
};

export default AppRoutes;
