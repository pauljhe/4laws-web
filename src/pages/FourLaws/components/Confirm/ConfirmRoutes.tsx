import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../paths";
import ConfirmFirst from "./ConfirmFirst";
import ConfirmMain from "./ConfirmMain";
import ConfirmSecond from "./ConfirmSecond";

const ConfirmRoutes: React.FC = () => {
  console.log(window.location.href);
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_MAIN} component={ConfirmMain} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST} component={ConfirmFirst} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND} component={ConfirmSecond} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_MAIN} />
    </Switch>
  );
};

export default ConfirmRoutes;