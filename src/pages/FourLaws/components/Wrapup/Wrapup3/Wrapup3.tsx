import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Wrapup3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-Sentence-Center">
        <div className="Law-Sentence-Margin Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.wrapup.three.line1"
            defaultMessage="Want to share your discovery?"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.wrapup.three.line2"
            defaultMessage="IF THIS CONTENT HAS BEEN MEANINGFUL AND HELPFUL TO YOU, PLEASE SHARE OR READ IT TO SOMEONE ELSE."
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.WRAPUP_2}
      />
    </React.Fragment>
  );
};

export default Wrapup3;