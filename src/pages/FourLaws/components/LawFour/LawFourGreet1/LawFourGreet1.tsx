import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import InfoIcon from '@material-ui/icons/Info';
import './LawFourGreet1.css';

const LawFourGreet1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.greet.one.title"
            defaultMessage="SELF-DIRECTED LIFE"
          />
        </div>
        <div className="LawFour-Greet-One-flex">
          <InfoIcon className="LawFour-Greet-One-Icon" />
          <div className="LawFour-Greet-One-Content">
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.one.line1"
                defaultMessage={"Self is on the throne"}
              />
            </span>
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.one.line2"
                defaultMessage={"Christ is outside the life"}
              />
            </span>
            <span>
              <FormattedMessage 
                id="fourlaws.law4.greet.one.line3"
                defaultMessage={"Interests are directed by self, often resulting in discord and frustration."}
              />
            </span>
          </div>
          
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_GREET_0}
        nextLink={FourLawsPaths.LAW_FOUR_GREET_2}
      />
    </React.Fragment>
  );
};

export default LawFourGreet1;