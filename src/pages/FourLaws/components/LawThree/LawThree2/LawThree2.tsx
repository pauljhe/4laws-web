import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawThree2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content">
        <div className="LawThree-SubTitle">
          <FormattedMessage 
            id="fourlaws.law3.two.title"
            defaultMessage="He Rose From the Dead"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law3.two.content"
            defaultMessage={'"Christ died for our sins...He was buried...He was raised on the third day, ' + 
                            'according to the Scriptures...He appeared to Peter, then to the twelve. ' + 
                            'After that He appeared to more than five hundred..." (1 Corinthians 15:3-6).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_THREE_1}
        nextTo={FourLawsPaths.LAW_THREE_3}
      />
    </React.Fragment>
  );
};

export default LawThree2;