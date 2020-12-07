import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FourLawsPaths } from "../../../paths";
import LawTwo1 from "./LawTwo1";
import LawTwo2 from "./LawTwo2";
import LawTwo3 from './LawTwo3';
import LawTwo4 from './LawTwo4';
import LawTwoTitle from "./LawTwoTitle";
import LawTwoWrapup from './LawTwoWrapup';

const LawTwoRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={FourLawsPaths.LAW_TWO_TITLE} component={LawTwoTitle} />
      <Route exact path={FourLawsPaths.LAW_TWO_1} component={LawTwo1} />
      <Route exact path={FourLawsPaths.LAW_TWO_2} component={LawTwo2} />
      <Route exact path={FourLawsPaths.LAW_TWO_3} component={LawTwo3} />
      <Route exact path={FourLawsPaths.LAW_TWO_4} component={LawTwo4} />
      <Route exact path={FourLawsPaths.LAW_TWO_WRAPUP} component={LawTwoWrapup} />
      <Redirect exact to={FourLawsPaths.LAW_TWO_TITLE} />
    </Switch>
  );
};

export default LawTwoRoutes;
