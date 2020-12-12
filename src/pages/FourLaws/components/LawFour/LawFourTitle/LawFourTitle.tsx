import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawFourTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.LAW_THREE_WRAPUP}
      nextTo={FourLawsPaths.LAW_FOUR_1}
    />
  );
};

export default LawFourTitle;