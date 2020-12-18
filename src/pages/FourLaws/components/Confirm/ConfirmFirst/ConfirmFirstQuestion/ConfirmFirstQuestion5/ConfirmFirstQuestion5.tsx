import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from '../../../../../../../components/Link';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import './ConfirmFirstQuestion5.css';

const ConfirmFirstQuestion5: React.FC = () => {
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Center Law-Sentence-Confirm-first-question5">
          <FormattedMessage 
            id="fourlaws.confirm.first.question.five"
            defaultMessage="Were you sincere when you invited Christ into your life?"
          />
        </div>
        <div className="Law-Question-Answer-Single">
          <Link to={FourLawsPaths.CONFIRM_FIRST_1_ANSWER}>
            <FormattedMessage 
              id="fourlaws.confirm.first.question.five.answer"
              defaultMessage="Yes"
            />
          </Link>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_FIRST_Q_4}
      />
    </div>
  );
};

export default ConfirmFirstQuestion5;