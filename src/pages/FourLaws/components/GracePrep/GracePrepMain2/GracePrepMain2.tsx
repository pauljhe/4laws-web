import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GracePrepMain2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.prep.main.two"
          defaultMessage={'If you receive Christ by faith, as an act of the will, many things will happen, including the following:'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_MAIN_1}
        nextTo={FourLawsPaths.GRACE_PREP_1}
      />
    </React.Fragment>
  );
};

export default GracePrepMain2;