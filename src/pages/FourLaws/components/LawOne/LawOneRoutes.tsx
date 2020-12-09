import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import LawOne1 from './LawOne1';
import LawOne2 from './LawOne2';
import LawOneTitle from './LawOneTitle';
import LawOneWrapup from './LawOneWrapup';

const LawOneRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE_TITLE} component={LawOneTitle} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE_1} component={LawOne1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE_2} component={LawOne2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE_WRAPUP} component={LawOneWrapup} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE_TITLE} />
    </Switch>
  );
};

export default LawOneRoutes;
