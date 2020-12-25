import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const GraceWrapup2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.wrapup.two"
            defaultMessage={'Which do you like most?'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.one"
            defaultMessage={'1. Christ came into your life.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.two"
            defaultMessage={'2. Your sins were forgiven.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.three"
            defaultMessage={'3. You became a child of God.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.four"
            defaultMessage={'4. You received eternal life.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.five"
            defaultMessage={'5. You began the great adventure for which God created you.'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_WRAPUP_1}
        nextTo={FourLawsPaths.GRACE_WRAPUP_3}
      />
    </React.Fragment>
 
  );
};

export default GraceWrapup2;