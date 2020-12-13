import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFourWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Wrapup">
        <FormattedMessage 
          id="fourlaws.law4.wrapup"
          defaultMessage={'The following explains how you can receive Christ:'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_4}
        nextTo={FourLawsPaths.PRAYER}
      />
    </React.Fragment>
 
  );
};

export default LawFourWrapup;