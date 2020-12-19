import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../paths';
import Confirm from './components/Confirm';
import Feelings from './components/Feelings';
import LawFour from './components/LawFour';
import LawOne from './components/LawOne/LawOne';
import LawThree from './components/LawThree';
import LawTwo from './components/LawTwo';
import Main from './components/Main';
import Prayer from './components/Prayer';

const FourLawsRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.MAIN} component={Main} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_ONE} component={LawOne} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_TWO} component={LawTwo} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_THREE} component={LawThree} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.LAW_FOUR} component={LawFour} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER} component={Prayer} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM} component={Confirm} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.FEELINGS} component={Feelings} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.MAIN} />
    </Switch>
  );
};

export default FourLawsRoutes;
