import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { RootPaths } from './paths';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={RootPaths.ROOT_LOCALE} component={Home} />
      <Redirect exact to={RootPaths.ROOT_EN} />
    </Switch>
  );
};

export default AppRoutes;
