import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawOneTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.MAIN_WRAPUP}
      nextTo={FourLawsPaths.LAW_ONE_1}
    />
  );
};

export default LawOneTitle;