import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import InfoIcon from '@material-ui/icons/Info';
import './LawFourGreet2.css';

const LawFourGreet2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.greet.two.title"
            defaultMessage="CHRIST-DIRECTED LIFE"
          />
        </div>
        <div className="LawFour-Greet-Two-flex">
          <InfoIcon className="LawFour-Greet-Two-Icon" />
          <div className="LawFour-Greet-Two-Content">
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
        previousLink={FourLawsPaths.LAW_FOUR_GREET_1}
        nextLink={FourLawsPaths.LAW_FOUR_GREET_3}
      />
    </React.Fragment>
  );
};

export default LawFourGreet2;