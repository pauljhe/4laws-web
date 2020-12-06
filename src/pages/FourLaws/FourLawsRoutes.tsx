import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths } from '../paths';
import LawOne from './components/LawOne/LawOne';
import Main from './components/Main';

const FourLawsRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={FourLawsPaths.MAIN} component={Main} />
      <Route path={FourLawsPaths.LAW_ONE} component={LawOne} />
      <Redirect exact to={FourLawsPaths.MAIN} />
    </Switch>
  );
};

export default FourLawsRoutes;
