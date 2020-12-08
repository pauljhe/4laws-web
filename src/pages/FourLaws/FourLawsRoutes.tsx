import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths } from '../paths';
import LawFour from './components/LawFour';
import LawOne from './components/LawOne/LawOne';
import LawThree from './components/LawThree';
import LawTwo from './components/LawTwo';
import Main from './components/Main';

const FourLawsRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={FourLawsPaths.MAIN} component={Main} />
      <Route path={FourLawsPaths.LAW_ONE} component={LawOne} />
      <Route path={FourLawsPaths.LAW_TWO} component={LawTwo} />
      <Route path={FourLawsPaths.LAW_THREE} component={LawThree} />
      <Route path={FourLawsPaths.LAW_FOUR} component={LawFour} />
      <Redirect exact to={FourLawsPaths.MAIN} />
    </Switch>
  );
};

export default FourLawsRoutes;
