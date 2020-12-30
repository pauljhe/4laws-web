import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from "../../../paths";
import LawFour1 from './LawFour1';
import LawFour2 from './LawFour2';
import LawFour3 from './LawFour3';
import LawFour4 from './LawFour4';
import LawFour5 from './LawFour5';
import LawFourGreet0 from './LawFourGreet0';
import LawFourGreet1 from './LawFourGreet1';
import LawFourGreet2 from './LawFourGreet2';
import LawFourGreet3 from './LawFourGreet3';
import LawFourGreet4 from './LawFourGreet4';
import LawFourTitle from './LawFourTitle';
import LawFourWrapup from './LawFourWrapup';
import LawFourWrapupPrep from './LawFourWrapupPrep';
import LawFourWrapupReview from './LawFourWrapupReview';

const LawFourRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_TITLE} component={LawFourTitle} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_1} component={LawFour1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_2} component={LawFour2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_3} component={LawFour3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_4} component={LawFour4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_5} component={LawFour5} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_GREET_0} component={LawFourGreet0} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_GREET_1} component={LawFourGreet1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_GREET_2} component={LawFourGreet2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_GREET_3} component={LawFourGreet3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_GREET_4} component={LawFourGreet4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_WRAPUP} component={LawFourWrapup} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_WRAPUP_PREP} component={LawFourWrapupPrep} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_WRAPUP_REVIEW} component={LawFourWrapupReview} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR_TITLE} />
    </Switch>
  );
};

export default LawFourRoutes;
