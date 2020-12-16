import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawThree3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content Law-LongSentence">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law3.three.title"
            defaultMessage="He is the Only Way to God"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law3.three.content"
            defaultMessage={'"Jesus said to him, \'I am the way, the truth, and the life; no one comes to the Father, but through Me\'" (John 14:6).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_THREE_2}
        nextTo={FourLawsPaths.LAW_THREE_4}
      />
    </React.Fragment>
  );
};

export default LawThree3;