import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour5: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <FormattedMessage 
          id="fourlaws.law4.five"
          defaultMessage={'Receiving Christ involves turning to God from self (repentance) and trusting Christ ' + 
                          'to come into our lives to forgive our sins and to make us the kinds of person He wants us to be. ' + 
                          'Just to agree intellectually that Jesus Christ is the Son of God and that He died on the cross for our sins ' + 
                          'is not enough. Nor is it enough to have an emotional experience. We receive Jesus Christ by faith, as an act of the will.'}
        />
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_4}
        nextLink={FourLawsPaths.LAW_FOUR_GREET_0}
      />
    </React.Fragment>
  );
};

export default LawFour5;