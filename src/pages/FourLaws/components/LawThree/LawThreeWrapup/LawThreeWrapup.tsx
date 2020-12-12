import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawThreeWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Wrapup">
        <FormattedMessage 
          id="fourlaws.law3.wrapup"
          defaultMessage={'It is not enough just to know these three laws...'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_THREE_4}
        nextTo={FourLawsPaths.LAW_FOUR}
      />
    </React.Fragment>
 
  );
};

export default LawThreeWrapup;