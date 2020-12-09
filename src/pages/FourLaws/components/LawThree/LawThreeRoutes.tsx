import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from "../../../paths";
import LawThree1 from "./LawThree1";
import LawThree2 from "./LawThree2";
import LawThree3 from './LawThree3';
import LawThree4 from './LawThree4';
import LawThreeTitle from "./LawThreeTitle";
import LawThreeWrapup from './LawThreeWrapup';

const LawThreeRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_TITLE} component={LawThreeTitle} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_1} component={LawThree1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_2} component={LawThree2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_3} component={LawThree3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_4} component={LawThree4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_WRAPUP} component={LawThreeWrapup} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE_TITLE} />
    </Switch>
  );
};

export default LawThreeRoutes;
