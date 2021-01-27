import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmThirdQuestion1.css';

const ConfirmThirdQuestion1: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.third.question.one.answer",
    defaultMessage: "No"
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
        <div className={`Law-Sentence-Center Law-Question-Below-words Law-ConfirmThird-Q1-Title-${language}`}>
          <FormattedMessage 
            id="fourlaws.confirm.third.question.one"
            defaultMessage="After you receive Christ personally, will He ever leave you?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Confirm-third-question1-${language}`} answer={answer} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_THIRD_1}
        nextTo={FourLawsPaths.CONFIRM_THIRD_Q_2}
      />
    </React.Fragment>
  );
};

export default ConfirmThirdQuestion1;