import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const FirstPeter57: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.suggest.five.words"
          defaultMessage={"\"casting all your anxiety on Him, because He cares for you.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.five.words.address"
          defaultMessage={"(1 Peter 5:7)"}
        />
      </div>
    </PageText>
  );
};

const Suggest5: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.suggest.five"
            defaultMessage={'T. Trust God for every detail of your life.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.five.address"
            defaultMessage={'(1 Peter 5:7)'}
          />
        </div>
        <Dialog contents={[<FirstPeter57 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_4}
        nextTo={FourLawsPaths.SUGGEST_6}
      />
    </React.Fragment>
 
  );
};

export default Suggest5;