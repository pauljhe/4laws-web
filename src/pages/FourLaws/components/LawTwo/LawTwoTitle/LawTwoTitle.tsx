import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawTwoTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.LAW_ONE_WRAPUP}
      nextTo={FourLawsPaths.LAW_TWO_1}
    />
  );
};

export default LawTwoTitle;