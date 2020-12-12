import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour4: React.FC = () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.four.title"
            defaultMessage="We Receive Christ by Personal Invitation"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law4.four.content"
            defaultMessage={'(Christ speaking): "Behold, I stand at the door and knock; ' + 
                            'if anyone hears My voice and opens the door, I will come in to him" (Revelation 3:20).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={(intl.locale === 'ko') ? FourLawsPaths.LAW_FOUR_2 : FourLawsPaths.LAW_FOUR_3}
        nextTo={FourLawsPaths.LAW_FOUR_5}
      />
    </React.Fragment>
  );
};

export default LawFour4;