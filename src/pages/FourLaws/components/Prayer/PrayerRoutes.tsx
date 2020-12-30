import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../paths';
import Prayer1 from './Prayer1';
import Prayer2 from './Prayer2';
import Prayer3 from './Prayer3';
import Prayer4 from './Prayer4';
import PrayerReview1 from './PrayerReview1';
import PrayerReview2 from './PrayerReview2';

const PrayerRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_1} component={Prayer1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_2} component={Prayer2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_3} component={Prayer3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_4} component={Prayer4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_REVIEW_1} component={PrayerReview1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_REVIEW_2} component={PrayerReview2} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.PRAYER_1} />
    </Switch>
  );
};

export default PrayerRoutes;
