import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawThreeTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.LAW_TWO_WRAPUP}
      nextTo={FourLawsPaths.LAW_THREE_1}
    />
  );
};

export default LawThreeTitle;