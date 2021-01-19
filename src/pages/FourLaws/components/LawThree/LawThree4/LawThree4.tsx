import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawThree4.css';
import Law3Diagram from '../../../../../icons/Law3Diagram';

const LawThree4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawThree-Content">
        <div className="LawThree-Four-flex">
          <Law3Diagram className="LawThree-Four-Diagram" />
          <span className="LawThree-Four-Text">
            <FormattedMessage 
              id="fourlaws.law3.four"
              defaultMessage={"This diagram illustrates that God has bridged the gulf which separates us from God by sending His Son, " + 
                              "Jesus Christ, to die on the cross in our place to pay the penalty for our sins."}
            />
          </span>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_THREE_3}
        nextTo={FourLawsPaths.LAW_THREE_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawThree4;