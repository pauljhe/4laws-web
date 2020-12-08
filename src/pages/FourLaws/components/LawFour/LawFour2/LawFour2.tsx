import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.two.title"
            defaultMessage="We Receive Christ Through Faith"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law4.two.content"
            defaultMessage={'"For by grace you have been saved through faith; and that not of yourselves, ' + 
                            'it is the gift of God; not as a result of works, that no one should boast" (Ephesians 2:8,9).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_1}
        nextLink={FourLawsPaths.LAW_FOUR_3}
      />
    </React.Fragment>
  );
};

export default LawFour2;