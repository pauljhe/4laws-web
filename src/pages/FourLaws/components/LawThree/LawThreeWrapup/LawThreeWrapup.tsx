import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
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
        previousLink={FourLawsPaths.LAW_THREE_4}
        nextLink={FourLawsPaths.LAW_THREE_WRAPUP}
      />
    </React.Fragment>
 
  );
};

export default LawThreeWrapup;