import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RootPaths, FourLawsPaths } from "../../../../paths";
import ConfirmFirst1 from "./ConfirmFirst1";
import ConfirmFirst2 from "./ConfirmFirst2";
import ConfirmFirstQuestion from "./ConfirmFirstQuestion";

const ConfirmFirstRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_1} component={ConfirmFirst1} />
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_2} component={ConfirmFirst2} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_Q} component={ConfirmFirstQuestion} />
      <Redirect to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST_1} />
    </Switch>
  );
};

export default ConfirmFirstRoutes;