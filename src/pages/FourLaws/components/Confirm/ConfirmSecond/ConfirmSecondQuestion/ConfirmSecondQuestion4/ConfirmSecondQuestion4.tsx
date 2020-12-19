import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmSecondQuestion4.css';

const ConfirmSecondQuestion4: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.second.question.four.answer",
    defaultMessage: "Eternal life"
  });
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div>
          <FormattedMessage 
            id="fourlaws.confirm.second.words"
            defaultMessage={'"And the witness is this, that God has given us eternal life, ' + 
                            'and this life is in His Son. He who has the Son has the life; ' + 
                            'he who does not have the Son of God does not have life. ' + 
                            'These things I have written to you who believe in the name of the Son of God, ' + 
                            'in order that you may know that you have eternal life" (1 John 5:11-13).'}
          />
        </div>
        <div className="Law-Sentence-Center Law-Question-Below-words No-maxwidth">
          <FormattedMessage 
            id="fourlaws.confirm.second.question.four"
            defaultMessage="If you have the Son what else do you have?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Confirm-second-question4-${language}`} answer={answer} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_SECOND_Q_3}
        nextTo={FourLawsPaths.CONFIRM_SECOND_Q_5}
      />
    </React.Fragment>
  );
};

export default ConfirmSecondQuestion4;