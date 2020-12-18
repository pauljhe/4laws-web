import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import Link from '../../../../../../../components/Link';
import PageText from '../../../../../../../components/PageText';
import { PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';

const ConfirmSecondQuestion3: React.FC = () => {
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT}>
        <FormattedMessage 
          id="fourlaws.confirm.second.question.three"
          defaultMessage="Do you have the Son?"
        />
      </PageText>
      <div className="Law-Question-Answer-Single">
        <Link to={FourLawsPaths.CONFIRM_SECOND_Q_4}>
          <FormattedMessage 
            id="fourlaws.confirm.second.question.three.answer"
            defaultMessage="Yes"
          />
        </Link>
      </div>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_SECOND_Q_2}
      />
    </div>
  );
};

export default ConfirmSecondQuestion3;