import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../paths';
import './PrayerReview2.css'

const PrayerReview2: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const onNextClick = () => {
    dispatch(actionCreators.setGreetFirstAnswer(PageType.REVIEW));
  };

  const language = (intl.locale === 'ko') ? 'Korean': 'English';

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className={`Law-Prayer-Review2-${language}`}>
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.prayer.review.two"
            defaultMessage={'Can you explain to me when and how you accepted Jesus Christ as your Savior and Lord?'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_REVIEW_1}
        nextTo={FourLawsPaths.CONFIRM}
        onNextClick={onNextClick}
      />
    </React.Fragment>
  );
};

export default PrayerReview2;