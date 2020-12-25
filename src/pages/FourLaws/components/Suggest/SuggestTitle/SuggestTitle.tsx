import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const SuggestTitle: React.FC = () => {
  return (
    <BottomNavigation 
      previousTo={FourLawsPaths.GRACE_WRAPUP_3}
      nextTo={FourLawsPaths.SUGGEST_1}
    />
  );
};

export default SuggestTitle;