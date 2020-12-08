import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import InfoIcon from '@material-ui/icons/Info';
import './LawThree4.css';

const LawThree4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content">
        <div className="LawThree-Four-flex">
          <InfoIcon className="LawThree-Four-Icon" />
          <span>
            <FormattedMessage 
              id="fourlaws.law3.four"
              defaultMessage={"This diagram illustrates that God has bridged the gulf which separates us from God by sending His Son, " + 
                              "Jesus Christ, to die on the cross in our place to pay the penalty for our sins."}
            />
          </span>
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_THREE_3}
        nextLink={FourLawsPaths.LAW_THREE_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawThree4;