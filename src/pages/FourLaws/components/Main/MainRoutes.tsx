import * as React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import MainTitle from './MainTitle';
import MainWrapup from './MainWrapup';

export enum MainPaths {
  MAIN_TITLE = '/0',
  MAIN_WRAPUP = '/1'
}

const MainRoutes: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path + MainPaths.MAIN_TITLE} render={() => <MainTitle />} />
      <Route exact path={path + MainPaths.MAIN_WRAPUP} render={() => <MainWrapup />} />
      <Redirect exact to={path + MainPaths.MAIN_TITLE} />
    </Switch>
  );
};

export default MainRoutes;
