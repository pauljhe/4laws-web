import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { AppState } from '../../../../../state/reducer';
import { FourLawsPaths } from '../../../../paths';
import './Prayer3.css';

const Prayer3: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const onYesClick = () => {
    dispatch(actionCreators.setPrayerAnswer(undefined));
  };
  const onNoClick = () => {
    dispatch(actionCreators.setPrayerAnswer(PageType.PREP));
  };

  const greetFirstAnswer: PageType | undefined = useSelector((state: AppState) => state.greetFirstAnswer);
  const isReview: boolean = greetFirstAnswer === PageType.REVIEW;

  const yesText = intl.formatMessage({
    id: "fourlaws.prayer.three.yes",
    defaultMessage: "Yes"
  });
  const noText = intl.formatMessage({
    id: "fourlaws.prayer.three.no",
    defaultMessage: "No"
  });

  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className={`Law-Sentence-Bold Law-Sentence-Center Law-Prayer3-${language}`}>
          <FormattedMessage 
            id="fourlaws.prayer.three"
            defaultMessage="Does this prayer express the desire of your heart?"
          />
        </div>
      </PageText>
      <div className="Law-Question-Answer">
        <BottomNavigation 
          previousTo={FourLawsPaths.PRAYER_4}
          previousText={yesText}
          nextTo={FourLawsPaths.GRACE_PREP}
          nextText={noText}
          hideArrow={true}
          onPreviousClick={onYesClick}
          onNextClick={onNoClick}
        />
      </div>
      <BottomNavigation 
        previousTo={(isReview) ? FourLawsPaths.PRAYER_REVIEW_1 : FourLawsPaths.PRAYER_2}
      />
    </div>
  );
};

export default Prayer3;