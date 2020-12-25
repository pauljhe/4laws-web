import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Suggest1 from './Suggest1';
import Suggest2 from './Suggest2';
import Suggest3 from './Suggest3';
import Suggest4 from './Suggest4';
import Suggest5 from './Suggest5';
import Suggest6 from './Suggest6';
import SuggestTitle from './SuggestTitle';

const SuggestRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_TITLE} component={SuggestTitle} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_1} component={Suggest1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_2} component={Suggest2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_3} component={Suggest3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_4} component={Suggest4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_5} component={Suggest5} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_6} component={Suggest6} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.SUGGEST_TITLE} />
    </Switch>
  );
};

export default SuggestRoutes;
