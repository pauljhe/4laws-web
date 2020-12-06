import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths } from '../../../paths';
import MainTitle from './MainTitle';
import MainWrapup from './MainWrapup';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={FourLawsPaths.MAIN_TITLE} render={() => <MainTitle />} />
      <Route exact path={FourLawsPaths.MAIN_WRAPUP} render={() => <MainWrapup />} />
      <Redirect exact to={FourLawsPaths.MAIN_TITLE} />
    </Switch>
  );
};

export default MainRoutes;
