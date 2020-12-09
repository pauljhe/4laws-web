import * as React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { RootPaths } from '../paths';
import FourLaws from '../FourLaws';

const HomeRoutes: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path + RootPaths.ROOT_FOUR_LAWS} component={FourLaws} />
      <Redirect exact to={path + RootPaths.ROOT_FOUR_LAWS} />
    </Switch>
  );
};

export default HomeRoutes;
