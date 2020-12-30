import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GracePrepWrapup2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.prep.wrapup.two"
          defaultMessage={'Thank you for your time'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_WRAPUP_1}
      />
    </React.Fragment>
  );
};

export default GracePrepWrapup2;