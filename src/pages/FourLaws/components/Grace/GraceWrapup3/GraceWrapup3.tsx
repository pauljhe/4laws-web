import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './GraceWrapup3.css';

const GraceWrapup3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center Law-Sentence-Bold">
        <div className="Law-GraceWrapup3">
          <FormattedMessage 
            id="fourlaws.grace.wrapup.three"
            defaultMessage={'Now what?'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_WRAPUP_2}
        nextTo={FourLawsPaths.SUGGEST}
      />
    </React.Fragment>
 
  );
};

export default GraceWrapup3;