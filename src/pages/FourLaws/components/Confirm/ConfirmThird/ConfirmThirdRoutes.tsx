import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../../paths";
import ConfirmThird1 from "./ConfirmThird1";
import ConfirmThird2 from "./ConfirmThird2";
import ConfirmThirdQuestion from "./ConfirmThirdQuestion";

const ConfirmThirdRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_1} component={ConfirmThird1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_2} component={ConfirmThird2} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_Q} component={ConfirmThirdQuestion} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD_1} />
    </Switch>
  );
};

export default ConfirmThirdRoutes;