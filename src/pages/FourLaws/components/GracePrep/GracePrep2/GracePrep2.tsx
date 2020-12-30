import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GracePrep2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.prep.two"
          defaultMessage={'2. Your sins will be forgiven.'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_1}
        nextTo={FourLawsPaths.GRACE_PREP_3}
      />
    </React.Fragment>
  );
};

export default GracePrep2;