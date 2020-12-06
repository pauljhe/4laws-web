import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawOneTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousLink={FourLawsPaths.MAIN_WRAPUP}
      nextLink={FourLawsPaths.LAW_ONE_1}
    />
  );
};

export default LawOneTitle;