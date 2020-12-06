import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FourLaws from './FourLaws';
import { FourLawsPaths } from './paths';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={FourLawsPaths.ROOT} component={FourLaws} />
      <Redirect exact to={FourLawsPaths.ROOT} />
    </Switch>
  );
};

export default AppRoutes;
