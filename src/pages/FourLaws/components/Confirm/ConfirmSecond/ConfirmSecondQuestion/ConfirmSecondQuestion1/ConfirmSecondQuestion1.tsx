import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmSecondQuestion1.css';

const ConfirmSecondQuestion1: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.second.question.one.answer",
    defaultMessage: "Eternal life"
  });
  const isDesktopView = useMediaQuery('(min-width:1280px)');
  const isKorean = intl.locale === 'ko';
  const language = (isKorean) ? 'Korean': 'English';
  const address = intl.formatMessage({
    id: "fourlaws.confirm.second.words.address",
    defaultMessage: ""
  });
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div>
          <FormattedMessage 
            id="fourlaws.confirm.second.question.one.words"
            defaultMessage={'"And the witness is this, that <span>God has given us eternal life</span>, ' + 
                            'and this life is in His Son. He who has the Son has the life; ' + 
                            'he who does not have the Son of God does not have life. ' + 
                            'These things I have written to you who believe in the name of the Son of God, ' + 
                            'in order that you may know that you have eternal life" (1 John 5:11-13).'}
            values={{
              span: (chunks: any) => <span className="Law-Text-Highlight">{chunks}</span>
            }}
          />
          {
            (!isKorean || isDesktopView) ? null: (" " + address)
          }
        </div>
        {
          (!isKorean || !isDesktopView) ? null:
          <div>
            { address }
          </div>
        }
        <div className="Law-Sentence-Center Law-Question-Below-words">
          <FormattedMessage 
            id="fourlaws.confirm.second.question.one"
            defaultMessage="What has God given us?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Confirm-second-question1-${language}`} answer={answer} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_SECOND_1}
        nextTo={FourLawsPaths.CONFIRM_SECOND_Q_2}
      />
    </React.Fragment>
  );
};

export default ConfirmSecondQuestion1;