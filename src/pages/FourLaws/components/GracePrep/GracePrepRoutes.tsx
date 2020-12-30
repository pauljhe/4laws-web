import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import GracePrep1 from './GracePrep1';
import GracePrep2 from './GracePrep2';
import GracePrep3 from './GracePrep3';
import GracePrep4 from './GracePrep4';
import GracePrep5 from './GracePrep5';
import GracePrepMain1 from './GracePrepMain1';
import GracePrepMain2 from './GracePrepMain2';
import GracePrepWrapup1 from './GracePrepWrapup1';
import GracePrepWrapup2 from './GracePrepWrapup2';

const GracePrepRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_MAIN_1} component={GracePrepMain1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_MAIN_2} component={GracePrepMain2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_1} component={GracePrep1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_2} component={GracePrep2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_3} component={GracePrep3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_4} component={GracePrep4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_5} component={GracePrep5} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_WRAPUP_1} component={GracePrepWrapup1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_WRAPUP_2} component={GracePrepWrapup2} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.GRACE_PREP_MAIN_1} />
    </Switch>
  );
};

export default GracePrepRoutes;
