import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../paths';
import './LawFourWrapupReview.css';

const LawFourWrapupReview: React.FC = () => {
  const dispatch = useDispatch();
  const onPreviousClick = () => {
    dispatch(actionCreators.setGreetFirstAnswer(undefined));
  };

  const onNextClick = () => {
    dispatch(actionCreators.setGreetFirstAnswer(PageType.REVIEW));
  };

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Wrapup-Review Law-PageContent Law-Sentence-Bold">
        <div className="Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.law4.wrapup.review"
            defaultMessage="That's great. Let me continue reading this booklet so you will know how to present this to someone else."
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_3}
        nextTo={FourLawsPaths.LAW_FOUR_WRAPUP}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />
    </React.Fragment>
 
  );
};

export default LawFourWrapupReview;