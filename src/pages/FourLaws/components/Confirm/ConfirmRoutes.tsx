import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FourLawsPaths, RootPaths } from "../../../paths";
import ConfirmFirst from "./ConfirmFirst";
import ConfirmMain from "./ConfirmMain";
import ConfirmSecond from "./ConfirmSecond";
import ConfirmThird from "./ConfirmThird";

const ConfirmRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_MAIN} component={ConfirmMain} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_FIRST} component={ConfirmFirst} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_SECOND} component={ConfirmSecond} />
      <Route path={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_THIRD} component={ConfirmThird} />
      <Redirect exact to={RootPaths.ROOT_LOCALE + FourLawsPaths.CONFIRM_MAIN} />
    </Switch>
  );
};

export default ConfirmRoutes;