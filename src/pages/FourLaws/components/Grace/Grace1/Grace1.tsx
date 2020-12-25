import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Revelation320: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.one.words1"
          defaultMessage={"\"Behold, I stand at the door and knock; if anyone hears My voice and opens the door, I will come in to him and will dine with him, and he with Me.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.one.words1.address"
          defaultMessage={"(Revelation 3:20)"}
        />
      </div>
    </PageText>
  );
};

const Colossian127: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.grace.one.words2"
          defaultMessage={"\"to whom God willed to make known what is the riches of the glory of this mystery among the Gentiles, which is Christ in you, the hope of glory.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.one.words2.address"
          defaultMessage={"(Colossians 1:27)"}
        />
      </div>
    </PageText>
  );
};

const Grace1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.one"
            defaultMessage={'1. Christ came into your life.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.one.address"
            defaultMessage={'(Revelation 3:20; Colossians 1:27)'}
          />
        </div>
        <Dialog contents={[<Revelation320 />, <Colossian127 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_TITLE}
        nextTo={FourLawsPaths.GRACE_2}
      />
    </React.Fragment>
 
  );
};

export default Grace1;