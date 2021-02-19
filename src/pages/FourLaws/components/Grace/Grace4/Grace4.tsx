import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Grace4.css';

const John524: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Grace4-John524-${language}`}>
        <FormattedMessage 
          id="fourlaws.grace.four.words"
          defaultMessage={"\"Truly, truly, I say to you, he who hears My word, and believes Him who sent Me, has eternal life, and does not come into judgment, but has passed out of death into life.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.four.words.address"
          defaultMessage={"(John 5:24)"}
        />
      </div>
    </PageText>
  );
};

const Grace4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.four"
            defaultMessage={'4. You received eternal life.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.four.address"
            defaultMessage={'(John 5:24)'}
          />
        </div>
        <Dialog contents={[<John524 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_3}
        nextTo={FourLawsPaths.GRACE_5}
      />
    </React.Fragment>
 
  );
};

export default Grace4;