import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import Dialog from '../../../../../components/Dialog';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './GraceWrapup1.css';

const FirstThessalonians518: React.FC = () => {
  return (
    <PageText type={PageTextType.CONTENT} className="Law-PageContent">
      <div className="Law-Sentence-Center Law-Sentence-Bold Law-GraceWrapup1-FirstThessalonians518">
        <FormattedMessage 
          id="fourlaws.grace.wrapup1.words"
          defaultMessage={"\"in everything give thanks; for this is God’s will for you in Christ Jesus.\""}
        />
      </div>
      <div className="Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.grace.wrapup1.words.address"
          defaultMessage={"(1 Thessalonians 5:18)"}
        />
      </div>
    </PageText>
  );
};

const GraceWrapup1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-Sentence-Center">
        <div className="Law-GraceWrapup1">
          <FormattedMessage 
            id="fourlaws.grace.wrapup.one"
            defaultMessage={'Can you think of anything more wonderful that could happen to you than receiving Christ? ' + 
                            'Would you like to thank God in prayer right now for what He has done for you? ' + 
                            'The very act of thanking God demonstrates faith.'}
          />
        </div>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.grace.wrapup.one.address"
            defaultMessage={'(1 Thessalonians 5:18)'}
          />
        </div>
        <Dialog contents={[<FirstThessalonians518 />]} />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_5}
        nextTo={FourLawsPaths.GRACE_WRAPUP_2}
      />
    </React.Fragment>
 
  );
};

export default GraceWrapup1;