import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawTwoWrapup.css'

const LawTwoWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Wrapup Law-Sentence-Bold Law-Sentence-Center">
        <FormattedMessage 
          id="fourlaws.law2.wrapup"
          defaultMessage={'The Third Law explains the only way to bridge this gulf...'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_TWO_4}
        nextTo={FourLawsPaths.LAW_THREE}
      />
    </React.Fragment>
 
  );
};

export default LawTwoWrapup;