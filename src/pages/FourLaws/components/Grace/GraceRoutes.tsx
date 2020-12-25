import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Grace1 from './Grace1';
import Grace2 from './Grace2';
import Grace3 from './Grace3';
import Grace4 from './Grace4';
import Grace5 from './Grace5';
import GraceTitle from './GraceTitle';
import GraceWrapup1 from './GraceWrapup1';
import GraceWrapup2 from './GraceWrapup2';
import GraceWrapup3 from './GraceWrapup3';

const GraceRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_TITLE} component={GraceTitle} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_1} component={Grace1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_2} component={Grace2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_3} component={Grace3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_4} component={Grace4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_5} component={Grace5} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_WRAPUP_1} component={GraceWrapup1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_WRAPUP_2} component={GraceWrapup2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_WRAPUP_3} component={GraceWrapup3} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_TITLE} />
    </Switch>
  );
};

export default GraceRoutes;
