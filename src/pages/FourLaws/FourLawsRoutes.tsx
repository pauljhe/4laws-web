import * as React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './components/Main';

export enum FourLawsPaths {
  MAIN = '/main',
  LAW_1 = '/one',
  LAW_2 = '/two',
  LAW_3 = '/three',
  LAW_4 = '/four',
  PRAYER = '/prayer',
  PAGE = '/:page',
  PAGE_ROOT = '/0'
}

const FourLawsRoutes: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path + FourLawsPaths.MAIN} component={Main} />
      <Redirect exact to={path + FourLawsPaths.MAIN} />
    </Switch>
  );
};

export default FourLawsRoutes;
