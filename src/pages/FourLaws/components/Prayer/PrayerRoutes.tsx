import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Prayer1 from './Prayer1';
import Prayer2 from './Prayer2';
import Prayer3 from './Prayer3';
import Prayer4 from './Prayer4';

const PrayerRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_1} render={() => <Prayer1 />} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_2} render={() => <Prayer2 />} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_3} render={() => <Prayer3 />} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_4} render={() => <Prayer4 />} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_1} />
    </Switch>
  );
};

export default PrayerRoutes;
