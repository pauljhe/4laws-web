import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const ConfirmMain: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        <FormattedMessage 
          id="fourlaws.confirm.main"
          defaultMessage={'How to Know That Christ Is in Your Life'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_4}
        nextTo={FourLawsPaths.CONFIRM_FIRST}
      />
    </React.Fragment>
 
  );
};

export default ConfirmMain;