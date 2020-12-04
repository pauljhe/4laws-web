import * as React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

const LawOneRoutes: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <div></div>
  );
};

export default LawOneRoutes;
