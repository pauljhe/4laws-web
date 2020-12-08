import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawFourTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousLink={FourLawsPaths.LAW_THREE_WRAPUP}
      nextLink={FourLawsPaths.LAW_FOUR_1}
    />
  );
};

export default LawFourTitle;