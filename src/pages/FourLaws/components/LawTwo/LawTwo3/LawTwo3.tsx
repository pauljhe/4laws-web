import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawTwo3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Content">
        <div className="LawTwo-SubTitle">
          <FormattedMessage 
            id="fourlaws.law2.three.title"
            defaultMessage="Man is Separated"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law2.three.content"
            defaultMessage={'"For the wages of sin is death" (spiritual separation from God) (Romans 6:23).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_TWO_2}
        nextLink={FourLawsPaths.LAW_TWO_4}
      />
    </React.Fragment>
  );
};

export default LawTwo3;