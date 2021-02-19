import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Wrapup2.css';

const Wrapup2: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-Sentence-Center Law-Sentence-Bold Law-LongSentence">
        <div className={`Law-Wrapup2-${language}`}>
          <FormattedMessage 
            id="fourlaws.wrapup.two"
            defaultMessage={'Take the initiative; call or visit a nearby church where Christ is honored and His Word is preached. ' + 
                            'Start this week, and make plans to attend regularly.'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.WRAPUP_1}
        nextTo={FourLawsPaths.WRAPUP_3}
      />
    </React.Fragment>
  );
};

export default Wrapup2;