import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const GraceTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.FEELINGS_3}
      nextTo={FourLawsPaths.GRACE_1}
    />
  );
};

export default GraceTitle;