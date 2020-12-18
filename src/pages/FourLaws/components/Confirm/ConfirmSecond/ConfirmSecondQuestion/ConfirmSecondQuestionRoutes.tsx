import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../../../paths";
import ConfirmSecondQuestion1 from "./ConfirmSecondQuestion1";
import ConfirmSecondQuestion2 from "./ConfirmSecondQuestion2";
import ConfirmSecondQuestion3 from "./ConfirmSecondQuestion3";
import ConfirmSecondQuestion4 from "./ConfirmSecondQuestion4";
import ConfirmSecondQuestion5 from "./ConfirmSecondQuestion5";

const ConfirmSecondQuestionRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_1} component={ConfirmSecondQuestion1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_2} component={ConfirmSecondQuestion2} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_3} component={ConfirmSecondQuestion3} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_4} component={ConfirmSecondQuestion4} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_5} component={ConfirmSecondQuestion5} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q_1} />
    </Switch>
  );
};

export default ConfirmSecondQuestionRoutes;