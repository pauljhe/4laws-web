import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import DiagramLink from '../../../../../components/DiagramLink';
import Law4DiagramLeft from '../../../../../icons/Law4DiagramLeft';
import Law4DiagramRight from '../../../../../icons/Law4DiagramRight';

const LawFourGreet3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-Greet-Title">
          <FormattedMessage 
            id="fourlaws.law4.greet.three"
            defaultMessage="Which circle best represents your life?"
          />
        </div>
        <div className="LawFour-Greet-flex">
          <DiagramLink to={FourLawsPaths.LAW_FOUR_GREET_3}>
            <Law4DiagramLeft />
          </DiagramLink>
          <DiagramLink to={FourLawsPaths.LAW_FOUR_GREET_3}>
            <Law4DiagramRight />
          </DiagramLink>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_2}
        nextTo={FourLawsPaths.LAW_FOUR_GREET_4}
      />
    </React.Fragment>
  );
};

export default LawFourGreet3;