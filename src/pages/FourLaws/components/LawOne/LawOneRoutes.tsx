import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths } from '../../../paths';
import LawOne1 from './LawOne1';
import LawOneTitle from './LawOneTitle';

const LawOneRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={FourLawsPaths.LAW_ONE_TITLE} component={LawOneTitle} />
      <Route exact path={FourLawsPaths.LAW_ONE_1} component={LawOne1} />
      <Redirect exact to={FourLawsPaths.LAW_ONE_TITLE} />
    </Switch>
  );
};

export default LawOneRoutes;
