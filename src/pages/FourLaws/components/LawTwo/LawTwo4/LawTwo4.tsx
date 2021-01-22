import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawTwo4.css';
import Law2Diagram from '../../../../../icons/Law2Diagram';

const LawTwo4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Content LawTwo-Four Law-LongSentence">
        <div className="LawTwo-Four-flex">
          <Law2Diagram className="LawTwo-Four-Diagram" />
          <span className="LawTwo-Four-Text">
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
        previousTo={FourLawsPaths.LAW_TWO_3}
        nextTo={FourLawsPaths.LAW_TWO_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawTwo4;