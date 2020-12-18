import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../../paths";
import ConfirmSecond1 from "./ConfirmSecond1";
import ConfirmSecondQuestion from "./ConfirmSecondQuestion";

const ConfirmSecondRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_1} component={ConfirmSecond1} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_Q} component={ConfirmSecondQuestion} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND_1} />
    </Switch>
  );
};

export default ConfirmSecondRoutes;