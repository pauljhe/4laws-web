import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GracePrep3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.prep.three"
          defaultMessage={'3. You will become a child of God.'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_2}
        nextTo={FourLawsPaths.GRACE_PREP_4}
      />
    </React.Fragment>
  );
};

export default GracePrep3;