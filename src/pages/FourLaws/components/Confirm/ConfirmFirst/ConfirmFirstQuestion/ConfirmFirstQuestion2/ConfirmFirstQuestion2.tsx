import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmFirstQuestion2.css';

const ConfirmFirstQuestion2: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.first.question.two.answer",
    defaultMessage: "Door to your life"
  });
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.law4.four.content"
            defaultMessage={'(Christ speaking): "Behold, I stand at the door and knock; ' + 
                            'if anyone hears My voice and opens the door, I will come in to him" (Revelation 3:20).'}
          />
        </div>
        <div className="Law-Sentence-Center Law-Question-Below-words">
          <FormattedMessage 
            id="fourlaws.confirm.first.question.two"
            defaultMessage="What does the door represent?"
          />
        </div>
        <Answer className="Law-Question-Answer-Animated Answer-Confirm-first-question2" answer={answer} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_FIRST_Q_1}
        nextTo={FourLawsPaths.CONFIRM_FIRST_Q_3}
      />
    </div>
  );
};

export default ConfirmFirstQuestion2;