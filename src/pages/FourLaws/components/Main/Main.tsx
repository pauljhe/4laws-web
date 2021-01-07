import React from 'react';
import MainRoutes from './MainRoutes';
import './Main.css';
import WaterColorIcon from '../../../../icons/WaterColorIcon';
import { FourLawsPaths } from '../../../paths';

const Main: React.FC = () => {
  const isWrapup: boolean = window.location.href.endsWith(FourLawsPaths.MAIN_WRAPUP);
  const iconClassName: string = "Main-WaterColorIcon" + ((isWrapup) ? " Main-WaterColorIcon-Top" : "");
  return (
    <React.Fragment>
      <WaterColorIcon className={iconClassName}></WaterColorIcon>
      <MainRoutes />
    </React.Fragment>
  );
};

export default Main;