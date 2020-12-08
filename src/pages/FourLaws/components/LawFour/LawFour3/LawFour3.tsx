import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <FormattedMessage 
          id="fourlaws.law4.three"
          defaultMessage={'When We Receive Christ, We Experience a New Birth (Read John 3:1-8.)'}
        />
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_2}
        nextLink={FourLawsPaths.LAW_FOUR_4}
      />
    </React.Fragment>
  );
};

export default LawFour3;