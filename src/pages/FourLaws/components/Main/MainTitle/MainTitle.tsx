import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './MainTitle.css';

const MainTitle: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.TITLE} className="FourLawsMain-PageText FourLawsMain-Title">
        <FormattedMessage 
          id="fourlaws.main"
          defaultMessage="Have you Heard of the Four Spiritual Laws?"
          values={{
            b: (chunks: any) => <b className="FourLawsMain-Kanji">{chunks}</b> 
          }}
        />
      </PageText>
      <BottomNavigation 
        nextTo={FourLawsPaths.MAIN_WRAPUP}
      />
    </React.Fragment>
  );
};

export default MainTitle;