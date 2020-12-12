import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import Law4DiagramRight from '../../../../../icons/Law4DiagramRight';

const LawFourGreet2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.greet.two.title"
            defaultMessage="CHRIST-DIRECTED LIFE"
          />
        </div>
        <div className="LawFour-Greet-flex">
          <Law4DiagramRight />
          <div className="LawFour-Greet-Content">
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.two.line1"
                defaultMessage={"Christ is in the life and on the throne"}
              />
            </span>
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.two.line2"
                defaultMessage={"Self is yielding to Christ"}
              />
            </span>
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.two.line3"
                defaultMessage={"Interests are directed by Christ, resulting in harmony with God's plan."}
              />
            </span>
          </div>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_1}
        nextTo={FourLawsPaths.LAW_FOUR_GREET_3}
      />
    </React.Fragment>
  );
};

export default LawFourGreet2;