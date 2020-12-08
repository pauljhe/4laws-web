import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawTwo3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content">
        <div className="LawThree-SubTitle">
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
        previousLink={FourLawsPaths.LAW_THREE_2}
        nextLink={FourLawsPaths.LAW_THREE_4}
      />
    </React.Fragment>
  );
};

export default LawTwo3;