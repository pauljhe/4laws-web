import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Matthew419: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.suggest.four.words1"
          defaultMessage={"And He said to them, \"Follow Me, and I will make you fishers of men.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.four.words1.address"
          defaultMessage={"(Matthew 4:19)"}
        />
      </div>
    </PageText>
  );
};

const John158: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.suggest.four.words2"
          defaultMessage={"\"My Father is glorified by this, that you bear much fruit, and so prove to be My disciples.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.four.words2.address"
          defaultMessage={"(John 15:8)"}
        />
      </div>
    </PageText>
  );
};

const Suggest4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.suggest.four"
            defaultMessage={'W. Witness for Christ by your life and words.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.four.address"
            defaultMessage={'(Matthew 4:19; John 15:8)'}
          />
        </div>
        <Dialog contents={[<Matthew419 />, <John158 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_3}
        nextTo={FourLawsPaths.SUGGEST_5}
      />
    </React.Fragment>
 
  );
};

export default Suggest4;