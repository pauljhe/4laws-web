import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import InfoIcon from '@material-ui/icons/Info';
import './LawFourGreet4.css';

const LawFourGreet4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.greet.four"
            defaultMessage="Which circle would you like to have represent your life?"
          />
        </div>
        <div className="LawFour-Greet-Four-flex">
          <InfoIcon className="LawFour-Greet-Four-Icon" />
          <InfoIcon className="LawFour-Greet-Four-Icon" />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_GREET_3}
        nextLink={FourLawsPaths.LAW_FOUR_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawFourGreet4;