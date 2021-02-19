import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../components/Answer';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { IVerseProps, PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Grace2.css';

const Colossians114: React.FC<IVerseProps> = (props) => {
  const className = `Law-PageContent Law-Dialog-Title${(props.minimized) ? ' Law-Dialog-Title-Minimized' : ''}`
  return (
    <PageText type={PageTextType.CONTENT} className={className}>
      <div className="Law-Sentence-Center Law-Sentence-Bold Law-Grace2-Colossians114">
        <FormattedMessage 
          id="fourlaws.grace.two.words1"
          defaultMessage={"\"in whom we have redemption, the forgiveness of sins.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.two.words1.address"
          defaultMessage={"(Colossians 1:14)"}
        />
      </div>
    </PageText>
  );
};

const Colossians213: React.FC<IVerseProps> = (props) => {
  const className = `Law-PageContent Law-Dialog-Title${(props.minimized) ? ' Law-Dialog-Title-Minimized' : ''}`;
  
  return (
    <PageText type={PageTextType.CONTENT} className={className}>
      <div className="Law-Sentence-Center Law-Sentence-Bold Law-Grace2-Colossians213">
        <FormattedMessage 
          id="fourlaws.grace.two.words2"
          defaultMessage={"\"When you were dead in your transgressions and the uncircumcision of your flesh, He made you alive together with Him, having forgiven us all our transgressions\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.two.words2.address"
          defaultMessage={"(Colossians 2:13)"}
        />
      </div>
    </PageText>
  );
};

const Question1: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.grace.two.question1.answer",
    defaultMessage: "Forgave them"
  });
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className={`Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold Law-Grace2-Q1-${language}`}>
          <FormattedMessage 
            id="fourlaws.grace.two.question1"
            defaultMessage="What did God do with your sins?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Grace-two-question1-${language}`} answer={answer} />
      </PageText>
    </React.Fragment>
  );
};

const Question2: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.grace.two.question2.answer",
    defaultMessage: "All of them"
  });
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.two.question2"
            defaultMessage="How many of your sins did He forgive?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Grace-two-question2-${language}`} answer={answer} />
      </PageText>
    </React.Fragment>
  );
};

const Grace2: React.FC = () => {
  const [minimized, setMinimized] = useState(false);
  const [verseIndex, setVerseIndex] = useState(0);

  const onNavigateClick = (index: number) => {
    setMinimized(!(index === 0 || index === 2));
    setVerseIndex((index < 2) ? 0: 1);
  };

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.two"
            defaultMessage={'2. Your sins were forgiven.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.two.address"
            defaultMessage={'(Colossians 1:14; Colossians 2:13)'}
          />
        </div>
        <Dialog 
          contents={[
            <div></div>, <Question1 />,
            <div></div>, <Question2 />
          ]} 
          title={(verseIndex === 0) ? <Colossians114 minimized={minimized} /> : <Colossians213 minimized={minimized} /> }
          onNavigateClick={onNavigateClick}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_1}
        nextTo={FourLawsPaths.GRACE_3}
      />
    </React.Fragment>
 
  );
};

export default Grace2;