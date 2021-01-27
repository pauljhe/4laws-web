import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmThirdQuestion2.css';

const ConfirmThirdQuestion2: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.third.question.two.answer",
    defaultMessage: "Once"
  });
  const isKorean = intl.locale === 'ko';
  const language = (isKorean) ? 'Korean': 'English';
  const isDesktopView = useMediaQuery('(min-width:1280px)');
  const address = intl.formatMessage({
    id: "fourlaws.confirm.third.words.address",
    defaultMessage: ""
  });
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div>
          <FormattedMessage 
            id="fourlaws.confirm.third.words"
            defaultMessage={'"...for He Himself has said I will never leave you, nor will I ever forsake you" (Hebrews 13:5)'}
          />
          {
            (!isKorean || isDesktopView) ? null: (" " + address)
          }
        </div>
        {
          (!isKorean || !isDesktopView) ? null :
          <div>
            { address }
          </div>
        }
        <div className="Law-Sentence-Center Law-Question-Below-words Law-ConfirmThird-Q2-Title">
          <FormattedMessage 
            id="fourlaws.confirm.third.question.two"
            defaultMessage="Because Christ will never leave you, how many times do you need to invite Him to come into your life?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Confirm-third-question2-${language}`} answer={answer} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_THIRD_Q_1}
        nextTo={FourLawsPaths.CONFIRM_THIRD_2}
      />
    </React.Fragment>
  );
};

export default ConfirmThirdQuestion2;