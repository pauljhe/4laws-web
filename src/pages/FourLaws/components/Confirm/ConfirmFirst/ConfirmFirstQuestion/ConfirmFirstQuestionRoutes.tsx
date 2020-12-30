import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths, RootPaths } from '../../../../../paths';
import ConfirmFirstQuestion1 from './ConfirmFirstQuestion1';
import ConfirmFirstQuestion2 from './ConfirmFirstQuestion2';
import ConfirmFirstQuestion3 from './ConfirmFirstQuestion3';
import ConfirmFirstQuestion4 from './ConfirmFirstQuestion4';
import ConfirmFirstQuestion5 from './ConfirmFirstQuestion5';
import ConfirmFirstQuestion6 from './ConfirmFirstQuestion6';

const ConfirmFirstQuestionRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_1} component={ConfirmFirstQuestion1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_2} component={ConfirmFirstQuestion2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_3} component={ConfirmFirstQuestion3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_4} component={ConfirmFirstQuestion4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_5} component={ConfirmFirstQuestion5} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_6} component={ConfirmFirstQuestion6} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q_1} />
    </Switch>
  );
};

export default ConfirmFirstQuestionRoutes;
