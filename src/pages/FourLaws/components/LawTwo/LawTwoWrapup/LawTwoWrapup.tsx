import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawTwoWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Wrapup">
        <FormattedMessage 
          id="fourlaws.law2.wrapup"
          defaultMessage={'The Third Law explains the only way to bridge this gulf...'}
        />
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_TWO_4}
        nextLink={FourLawsPaths.LAW_TWO_WRAPUP}
      />
    </React.Fragment>
 
  );
};

export default LawTwoWrapup;