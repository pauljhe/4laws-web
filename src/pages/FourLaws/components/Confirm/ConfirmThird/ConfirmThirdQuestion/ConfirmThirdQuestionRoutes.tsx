import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../../../paths";
import ConfirmThirdQuestion1 from "./ConfirmThirdQuestion1";
import ConfirmThirdQuestion2 from "./ConfirmThirdQuestion2";

const ConfirmThirdQuestionRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_Q_1} component={ConfirmThirdQuestion1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_Q_2} component={ConfirmThirdQuestion2} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_Q_1} />
    </Switch>
  );
};

export default ConfirmThirdQuestionRoutes;