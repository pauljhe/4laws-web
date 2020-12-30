import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import { AppState } from '../../../../../state/reducer';
import { FourLawsPaths } from '../../../../paths';

const Prayer1: React.FC = () => {
  const greetSecondAnswer: PageType | undefined = useSelector((state: AppState) => state.greetSecondAnswer);
  const isPrep: boolean = greetSecondAnswer === PageType.PREP;
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
        previousTo={(isPrep) ? FourLawsPaths.LAW_FOUR_WRAPUP_PREP: FourLawsPaths.LAW_FOUR_WRAPUP}
        nextTo={FourLawsPaths.PRAYER_2}
      />
    </React.Fragment>
  );
};

export default Prayer1;