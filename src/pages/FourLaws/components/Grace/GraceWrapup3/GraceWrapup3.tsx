import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GraceWrapup3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div>
          <FormattedMessage 
            id="fourlaws.grace.wrapup.three"
            defaultMessage={'To enjoy your new life to the fullest...'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_WRAPUP_2}
        nextTo={FourLawsPaths.GRACE_WRAPUP_3}
      />
    </React.Fragment>
 
  );
};

export default GraceWrapup3;