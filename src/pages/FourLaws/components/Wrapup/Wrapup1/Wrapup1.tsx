import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Hebrews1025: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold">
        <FormattedMessage 
          id="fourlaws.wrapup.one.words"
          defaultMessage={"\"not abandoning our own meeting together, as is the habit of some people, but encouraging one another; and all the more as you see the day drawing near.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.wrapup.one.words.address"
          defaultMessage={"(Hebrews 10:25)"}
        />
      </div>
    </PageText>
  );
};

const Wrapup1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Center Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.wrapup.one.line1"
            defaultMessage="FELLOWSHIP IN A GOOD CHURCH"
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.wrapup.one.line2"
            defaultMessage={'God\'s Word admonishes us not to forsake "the assembling of ourselves together" (Hebrews 10:25). ' + 
                            'Several logs burn brightly together; but put one aside on the cold hearth and the fire goes out. ' + 
                            'So it is with your relationship with other Christians. If you do not belong to a church, do not wait to be invited. '}
          />
        </div>
        <Dialog contents={[<Hebrews1025 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.SUGGEST_6}
        nextTo={FourLawsPaths.WRAPUP_2}
      />
    </React.Fragment>
  );
};

export default Wrapup1;