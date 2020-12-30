import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import { AppState } from '../../../../../state/reducer';
import { FourLawsPaths } from '../../../../paths';

const ConfirmMain: React.FC = () => {
  const greetFirstAnswer: PageType | undefined = useSelector((state: AppState) => state.greetFirstAnswer);
  const isReview: boolean = greetFirstAnswer === PageType.REVIEW;
  
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.confirm.main"
            defaultMessage={'How to Know That Christ Is in Your Life'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={(isReview) ? FourLawsPaths.PRAYER_REVIEW_2 : FourLawsPaths.PRAYER_4}
        nextTo={FourLawsPaths.CONFIRM_FIRST}
      />
    </React.Fragment>
 
  );
};

export default ConfirmMain;