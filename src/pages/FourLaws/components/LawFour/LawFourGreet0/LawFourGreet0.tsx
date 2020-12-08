import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFourGreet0: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Wrapup">
        <FormattedMessage 
          id="fourlaws.law4.greet.zero"
          defaultMessage={'These two circles represent two kinds of lives:'}
        />
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_5}
        nextLink={FourLawsPaths.LAW_FOUR_GREET_1}
      />
    </React.Fragment>
 
  );
};

export default LawFourGreet0;