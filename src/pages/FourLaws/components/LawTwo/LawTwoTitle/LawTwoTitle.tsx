import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawTwoTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousLink={FourLawsPaths.LAW_ONE_WRAPUP}
      nextLink={FourLawsPaths.LAW_TWO_1}
    />
  );
};

export default LawTwoTitle;