import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Feelings1 from './Feelings1';
import Feelings2 from './Feelings2';
import Feelings3 from './Feelings3';

const FeelingsRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.FEELINGS_1} component={Feelings1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.FEELINGS_2} component={Feelings2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.FEELINGS_3} component={Feelings3} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.FEELINGS_1} />
    </Switch>
  );
};

export default FeelingsRoutes;
