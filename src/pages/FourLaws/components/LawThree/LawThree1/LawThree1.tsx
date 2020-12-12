import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawThree1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content">
        <div className="LawThree-SubTitle">
          <FormattedMessage 
            id="fourlaws.law3.one.title"
            defaultMessage="He Died in Our Place"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law3.one.content"
            defaultMessage={'"But God demonstrates His own love toward us, in that while we were yet sinners, Christ died for us" (Romans 5:8).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_THREE_TITLE}
        nextTo={FourLawsPaths.LAW_THREE_2}
      />
    </React.Fragment>
  );
};

export default LawThree1;