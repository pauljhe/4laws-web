import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Prayer1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.prayer.one.line1"
            defaultMessage="YOU CAN RECEIVE CHRIST RIGHT NOW by FAITH THROUGH PRAYER. (Prayer is talking with God)"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.prayer.one.line2"
            defaultMessage={'God knows your heart and is not concerned with your words as He is with the attitude of your heart.'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_WRAPUP}
        nextTo={FourLawsPaths.PRAYER_2}
      />
    </React.Fragment>
  );
};

export default Prayer1;