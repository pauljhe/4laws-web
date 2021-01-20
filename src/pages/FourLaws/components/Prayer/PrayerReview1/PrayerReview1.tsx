import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../paths';
import './PrayerReview1.css';

const PrayerReview1: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const onNoClick = () => {
    dispatch(actionCreators.setGreetFirstAnswer(PageType.REVIEW));
  };

  const yesText = intl.formatMessage({
    id: "fourlaws.prayer.review.one.yes",
    defaultMessage: "Yes"
  });
  const noText = intl.formatMessage({
    id: "fourlaws.prayer.review.one.no",
    defaultMessage: "No"
  });

  const isKorean: boolean = intl.locale === 'ko';

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className={(isKorean) ? "Law-Prayer-Review1-Korean" : "Law-Prayer-Review1"}>
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.prayer.review.one"
            defaultMessage={'Have you ever accepted Jesus Christ in this way?'}
          />
        </div>
      </PageText>
      <div className="Law-Question-Answer">
        <BottomNavigation 
          previousTo={FourLawsPaths.PRAYER_REVIEW_2}
          previousText={yesText}
          nextTo={FourLawsPaths.PRAYER_3}
          nextText={noText}
          hideArrow={true}
          onNextClick={onNoClick}
        />
      </div>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_2}
      />
    </React.Fragment>
  );
};

export default PrayerReview1;