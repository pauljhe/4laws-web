import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawThreeTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousLink={FourLawsPaths.LAW_TWO_WRAPUP}
      nextLink={FourLawsPaths.LAW_THREE_1}
    />
  );
};

export default LawThreeTitle;