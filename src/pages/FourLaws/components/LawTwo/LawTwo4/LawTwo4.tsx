import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawTwo4.css';
import Law2Diagram from '../../../../../icons/Law2Diagram';

const LawTwo4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Content">
        <div className="LawTwo-Four-flex">
          <Law2Diagram className="LawTwo-Four-Diagram" />
          <span>
            <FormattedMessage 
              id="fourlaws.law2.four"
              defaultMessage={"This diagram illustrates that God is holy and man is sinful. " + 
                              "A great gulf separates the two. The arrows illustrate that man is " + 
                              "continually trying to reach God and the abundant life through " + 
                              "his own efforts, such as a good life, philosophy, or religion."}
            />
          </span>
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_TWO_3}
        nextLink={FourLawsPaths.LAW_TWO_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawTwo4;