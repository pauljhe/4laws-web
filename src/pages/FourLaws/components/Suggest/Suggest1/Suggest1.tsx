import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Suggest1.css';

const John157: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Suggest1-John157-${language}`}>
        <FormattedMessage 
          id="fourlaws.suggest.one.words"
          defaultMessage={"\"If you abide in Me, and My words abide in you, ask whatever you wish, and it will be done for you.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.one.words.address"
          defaultMessage={"(John 15:7)"}
        />
      </div>
    </PageText>
  );
};

const Suggest1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.suggest.one"
            defaultMessage={'G. Go to God in prayer daily.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.one.address"
            defaultMessage={'(John 15:7)'}
          />
        </div>
        <Dialog contents={[<John157 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_TITLE}
        nextTo={FourLawsPaths.SUGGEST_2}
      />
    </React.Fragment>
 
  );
};

export default Suggest1;