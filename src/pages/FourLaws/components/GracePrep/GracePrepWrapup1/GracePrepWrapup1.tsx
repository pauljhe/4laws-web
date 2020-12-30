import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../paths';

const GracePrepWrapup1: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const onYesClick = () => {
    dispatch(actionCreators.setPrayerAnswer(PageType.PREP));
  };

  const yesText = intl.formatMessage({
    id: "fourlaws.grace.prep.one.yes",
    defaultMessage: "Yes"
  });
  const noText = intl.formatMessage({
    id: "fourlaws.grace.prep.one.no",
    defaultMessage: "No"
  });
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        {/* <div>
          <FormattedMessage 
            id="fourlaws.grace.prep.one"
            defaultMessage={'1. Christ will come into your life.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.prep.two"
            defaultMessage={'2. Your sins will be forgiven.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.prep.three"
            defaultMessage={'3. You will become a child of God.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.prep.four"
            defaultMessage={'4. You will receive eternal life.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.grace.prep.five"
            defaultMessage={'5. The great adventure for which God created you will begin.'}
          />
        </div> */}
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.prep.wrapup.one"
            defaultMessage={'If you receive Christ, these things will happen to you. Would you like to receive Christ?'}
          />
        </div>
      </PageText>
      <div className="Law-Question-Answer">
        <BottomNavigation 
          previousTo={FourLawsPaths.PRAYER_4}
          previousText={yesText}
          nextTo={FourLawsPaths.GRACE_PREP_WRAPUP_2}
          nextText={noText}
          hideArrow={true}
          onPreviousClick={onYesClick}
        />
      </div>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_5}
      />
    </React.Fragment>
  );
};

export default GracePrepWrapup1;