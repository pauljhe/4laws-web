import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawOneWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawOne-Wrapup">
        <FormattedMessage 
          id="fourlaws.law1.wrapup"
          defaultMessage={'Why is it that most people are not experiencing the abundant life? Because...'}
        />
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_ONE_2}
        nextLink={FourLawsPaths.LAW_ONE_WRAPUP}
      />
    </React.Fragment>
 
  );
};

export default LawOneWrapup;