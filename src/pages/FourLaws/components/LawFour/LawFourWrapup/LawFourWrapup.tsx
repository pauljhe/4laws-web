import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import { AppState } from '../../../../../state/reducer';
import { FourLawsPaths } from '../../../../paths';

const LawFourWrapup: React.FC = () => {
  const greetFirstAnswer: PageType | undefined = useSelector((state: AppState) => state.greetFirstAnswer);
  const isReview: boolean = greetFirstAnswer === PageType.REVIEW;
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Wrapup Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.law4.wrapup"
          defaultMessage={'The following explains how you can receive Christ:'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={(isReview) ? FourLawsPaths.LAW_FOUR_WRAPUP_REVIEW : FourLawsPaths.LAW_FOUR_GREET_4}
        nextTo={FourLawsPaths.PRAYER}
      />
    </React.Fragment>
 
  );
};

export default LawFourWrapup;