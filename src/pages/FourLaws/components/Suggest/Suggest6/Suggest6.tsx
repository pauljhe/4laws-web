import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Suggest6.css';

const Galatians51617: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Suggest6-Galatians51617-${language}`}>
        <FormattedMessage 
          id="fourlaws.suggest.six.words1"
          defaultMessage={"\"But I say, walk by the Spirit, and you will not carry out the desire of the flesh. " + 
                          "For the flesh sets its desire against the Spirit, and the Spirit against the flesh; " + 
                          "for these are in opposition to one another, so that you may not do the things that you please.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.six.words1.address"
          defaultMessage={"(Galatians 5:16,17)"}
        />
      </div>
    </PageText>
  );
};

const Acts18: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Suggest6-Acts18-${language}`}>
        <FormattedMessage 
          id="fourlaws.suggest.six.words2"
          defaultMessage={"\"but you will receive power when the Holy Spirit has come upon you; and you shall be My witnesses both in Jerusalem, " + 
                          "and in all Judea and Samaria, and even to the remotest part of the earth.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.suggest.six.words2.address"
          defaultMessage={"(Acts 1:8)"}
        />
      </div>
    </PageText>
  );
};

const Suggest6: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className={`Law-Sentence-Bold Law-Suggest6-Title-${language}`}>
          <FormattedMessage 
            id="fourlaws.suggest.six"
            defaultMessage={'H. Holy Spirit - Allow Him to control and empower your daily life and witness.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.suggest.six.address"
            defaultMessage={'(Galatians 5:16,17; Acts 1:8)'}
          />
        </div>
        <Dialog contents={[<Galatians51617 />, <Acts18 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_5}
        nextTo={FourLawsPaths.WRAPUP}
      />
    </React.Fragment>
 
  );
};

export default Suggest6;