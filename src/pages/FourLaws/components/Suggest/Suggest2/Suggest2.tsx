import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Acts1711: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.suggest.two.words"
          defaultMessage={"\"Now these were more noble-minded than those in Thessalonica, for they received the word with great eagerness, " + 
                          "examining the Scriptures daily to see whether these things were so.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.two.words.address"
          defaultMessage={"(Acts 17:11)"}
        />
      </div>
    </PageText>
  );
};

const Suggest2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.suggest.two"
            defaultMessage={'R. Read God\'s Word daily.'}
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.suggest.two.address"
            defaultMessage={'(Acts 17:11)'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.two.suggestion"
            defaultMessage={'Begin with the Gospel of John.'}
          />
        </div>
        <Dialog contents={[<Acts1711 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_1}
        nextTo={FourLawsPaths.SUGGEST_3}
      />
    </React.Fragment>
 
  );
};

export default Suggest2;