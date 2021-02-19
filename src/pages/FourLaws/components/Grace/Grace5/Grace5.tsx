import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Grace5.css';

const John1010: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold Law-Grace5-John1010">
        <FormattedMessage 
          id="fourlaws.grace.five.words1"
          defaultMessage={"\"The thief comes only to steal and kill and destroy; I came that they may have life, and have it abundantly.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.five.words1.address"
          defaultMessage={"(John 10:10)"}
        />
      </div>
    </PageText>
  );
};

const SecondCorinthians517: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Grace5-Corinthian517-${language}`}>
        <FormattedMessage 
          id="fourlaws.grace.five.words2"
          defaultMessage={"\"Therefore if anyone is in Christ, he is a new creature; the old things passed away; behold, new things have come.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.five.words2.address"
          defaultMessage={"(2 Corinthians 5:17)"}
        />
      </div>
    </PageText>
  );
};

const Grace5: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.five"
            defaultMessage={'5. You began the great adventure for which God created you.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.five.address"
            defaultMessage={'(John 10:10; 2 Corinthians 5:17)'}
          />
        </div>
        <Dialog contents={[<John1010 />, <SecondCorinthians517 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_4}
        nextTo={FourLawsPaths.GRACE_WRAPUP_1}
      />
    </React.Fragment>
 
  );
};

export default Grace5;