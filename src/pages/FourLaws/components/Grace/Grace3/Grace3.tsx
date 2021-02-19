import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Answer from '../../../../../components/Answer';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { IVerseProps, PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './Grace3.css';

const John112: React.FC<IVerseProps> = (props) => {
  const className = `Law-PageContent Law-Dialog-Title${(props.minimized) ? ' Law-Dialog-Title-Minimized' : ''}`;
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <PageText type={PageTextType.CONTENT} className={className}>
      <div className={`Law-Sentence-Center Law-Sentence-Bold Law-Grace3-John112-${language}`}>
        <FormattedMessage 
          id="fourlaws.grace.three.words"
          defaultMessage={"\"But as many as received Him, to them He gave the right to become children of God, even to those who believe in His name\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.three.words.address"
          defaultMessage={"(John 1:12)"}
        />
      </div>
    </PageText>
  );
};

const Question1: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.grace.three.question1.answer",
    defaultMessage: "Child of God"
  });
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.three.question1"
            defaultMessage="What does this verse say you have become?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Grace-three-question1-${language}`} answer={answer} />
      </PageText>
    </React.Fragment>
  );
};

const Question2: React.FC = () => {
  const intl = useIntl();
  const answer = intl.formatMessage({
    id: "fourlaws.grace.three.question2.answer",
    defaultMessage: "Brother or Sister"
  });
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className={`Law-Sentence-Center Law-Sentence-Margin Law-Sentence-Bold Law-Grace3-Q2-${language}`}>
          <FormattedMessage 
            id="fourlaws.grace.three.question2"
            defaultMessage="If you are Child of God and I am a child of God, what does that make us?"
          />
        </div>
        <Answer className={`Law-Question-Answer-Animated Answer-Grace-three-question2-${language}`} answer={answer} />
      </PageText>
    </React.Fragment>
  );
};

const Grace3: React.FC = () => {
  const [minimized, setMinimized] = useState(false); 
  const onNavigateClick = (index: number) => {
    setMinimized(index !== 0);
  };

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.grace.three"
            defaultMessage={'3. You became a child of God.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.three.address"
            defaultMessage={'(John 1:12)'}
          />
        </div>
        <Dialog 
          contents={[<div></div>, <Question1 />, <Question2 />]} 
          title={<John112 minimized={minimized} /> }
          onNavigateClick={onNavigateClick}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_2}
        nextTo={FourLawsPaths.GRACE_4}
      />
    </React.Fragment>
 
  );
};

export default Grace3;