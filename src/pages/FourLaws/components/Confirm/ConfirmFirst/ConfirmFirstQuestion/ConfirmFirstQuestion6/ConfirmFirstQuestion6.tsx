import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../../../components/Answer';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmFirstQuestion6.css';

const ConfirmFirstQuestion6: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';

  const answer = intl.formatMessage({
    id: "fourlaws.confirm.first.question.six.answer",
    defaultMessage: "In my heart or life"
  });
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Center Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.confirm.first.question.six"
            defaultMessage="According to His promise in Revelation 3:20, where is Christ right now in relation to you?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Confirm-first-question6-${language}`} answer={answer}></Answer>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_FIRST_Q_5}
        nextTo={FourLawsPaths.CONFIRM_FIRST_2}
      />
    </div>
  );
};

export default ConfirmFirstQuestion6;