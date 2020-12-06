import React from 'react';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import { FourLawsPaths } from '../../../../paths';

const LawOneTitle: React.FC = () => {
  return (
    <React.Fragment>
      <span>Testing texts</span>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_ONE_TITLE}
        nextLink={FourLawsPaths.LAW_ONE_1}
      />
    </React.Fragment>
  );
};

export default LawOneTitle;