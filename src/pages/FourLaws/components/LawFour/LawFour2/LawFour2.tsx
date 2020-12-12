import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour2: React.FC = () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="Law-SubTitle">
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
        previousTo={FourLawsPaths.LAW_FOUR_1}
        nextTo={(intl.locale === 'ko') ? FourLawsPaths.LAW_FOUR_4 : FourLawsPaths.LAW_FOUR_3}
      />
    </React.Fragment>
  );
};

export default LawFour2;