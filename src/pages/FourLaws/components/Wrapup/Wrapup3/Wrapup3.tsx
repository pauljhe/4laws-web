import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Wrapup3.css';

const Wrapup3: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-Sentence-Center">
        <div className={`Law-Sentence-Margin Law-Sentence-Bold Law-Wrapup3-Title-${language}`}>
          <FormattedMessage 
            id="fourlaws.wrapup.three.line1"
            defaultMessage="Want to share your discovery?"
          />
        </div>
        <div className={`Law-Wrapup3-Content-${language}`}>
          <FormattedMessage 
            id="fourlaws.wrapup.three.line2"
            defaultMessage="IF THIS CONTENT HAS BEEN MEANINGFUL AND HELPFUL TO YOU, PLEASE SHARE OR READ IT TO SOMEONE ELSE."
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.WRAPUP_2}
      />
    </React.Fragment>
  );
};

export default Wrapup3;