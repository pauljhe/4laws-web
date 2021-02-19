import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Suggest3.css';

const John1421: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Suggest3-John1421-${language}`}>
        <FormattedMessage 
          id="fourlaws.suggest.three.words"
          defaultMessage={"\"He who has My commandments and keeps them is the one who loves Me; and he who loves Me will be loved by My Father, " + 
                          "and I will love him and will disclose Myself to him.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.three.words.address"
          defaultMessage={"(John 14:21)"}
        />
      </div>
    </PageText>
  );
};

const Suggest3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.suggest.three"
            defaultMessage={'O. Obey God, moment by moment.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.three.address"
            defaultMessage={'(John 14:21)'}
          />
        </div>
        <Dialog contents={[<John1421 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_2}
        nextTo={FourLawsPaths.SUGGEST_4}
      />
    </React.Fragment>
 
  );
};

export default Suggest3;