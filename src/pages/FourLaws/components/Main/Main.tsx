import React from 'react';
import MainRoutes from './MainRoutes';
import './Main.css';
import WaterColorIcon from '../../../../icons/WaterColorIcon';
import { FourLawsPaths } from '../../../paths';
import { useDispatch } from 'react-redux';
import actionCreators from '../../../../state/actionCreators';

const Main: React.FC = () => {
  //reset all responses on visiting Main Page
  const dispatch = useDispatch();
  dispatch(actionCreators.initializeStates());

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