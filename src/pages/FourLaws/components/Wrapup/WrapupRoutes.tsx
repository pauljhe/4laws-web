import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Wrapup1 from './Wrapup1';
import Wrapup2 from './Wrapup2';
import Wrapup3 from './Wrapup3';

const WrapupRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.WRAPUP_1} component={Wrapup1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.WRAPUP_2} component={Wrapup2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.WRAPUP_3} component={Wrapup3} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.WRAPUP_1} />
    </Switch>
  );
};

export default WrapupRoutes;
