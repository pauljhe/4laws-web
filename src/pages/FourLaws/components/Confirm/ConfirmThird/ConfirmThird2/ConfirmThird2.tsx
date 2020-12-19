import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../paths';

const ConfirmThird2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.confirm.third.two.line1"
            defaultMessage="You can know on the basis of His promise that Christ lives in you and that you have eternal life, from the very moment you invite Him in. He will not deceive you."
          />
        </div>
        <div className="Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.confirm.third.two.line2"
            defaultMessage={'An important reminder...'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_THIRD_Q_2}
        nextTo={FourLawsPaths.CONFIRM_THIRD_2}
      />
    </React.Fragment>
  );
};

export default ConfirmThird2;