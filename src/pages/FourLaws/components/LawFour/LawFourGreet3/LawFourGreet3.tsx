import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import InfoIcon from '@material-ui/icons/Info';
import './LawFourGreet3.css';

const LawFourGreet3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.greet.three"
            defaultMessage="Which circle best represents your life?"
          />
        </div>
        <div className="LawFour-Greet-Three-flex">
          <InfoIcon className="LawFour-Greet-Three-Icon" />
          <InfoIcon className="LawFour-Greet-Three-Icon" />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_GREET_2}
        nextLink={FourLawsPaths.LAW_FOUR_GREET_4}
      />
    </React.Fragment>
  );
};

export default LawFourGreet3;