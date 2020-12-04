import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import './MainWrapup.css';

const MainWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="FourLawsMain-Wrapup">
        <FormattedMessage 
          id="fourlaws.main.wrapup"
          defaultMessage={'Just as there are physical laws that govern the physical universe, ' + 
                          'so are there spiritual laws that govern your relationship with God.'}
        />
      </PageText>
      <BottomNavigation 
        previousLink='/4laws/main/0'
        nextLink='/4laws/one'
      />
    </React.Fragment>
 
  );
};

export default MainWrapup;