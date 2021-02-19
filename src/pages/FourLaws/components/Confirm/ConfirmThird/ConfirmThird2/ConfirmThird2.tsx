import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../paths';
import './ConfirmThird2.css';

const ConfirmThird2: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className={`Law-Sentence-Margin Law-Sentence-Center Law-ConfirmThird-2-Title-${language}`}>
          <FormattedMessage 
            id="fourlaws.confirm.third.two.line1"
            defaultMessage="You can know that the living Christ indwells you, and that you have eternal life, from the very moment you invite Him in on the basis of His promise. He will not deceive you."
          />
        </div>
        <div className="Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.confirm.third.two.line2"
            defaultMessage={'What about feelings?'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_THIRD_Q_2}
        nextTo={FourLawsPaths.FEELINGS}
      />
    </React.Fragment>
  );
};

export default ConfirmThird2;