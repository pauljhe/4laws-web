import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './MainTitle.css';

const MainTitle: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.TITLE} className="FourLawsMain-Title">
        <FormattedMessage 
          id="fourlaws.main1"
          defaultMessage="Have You"
        />
        <span className="FourLawsMain-Kanji">
          <FormattedMessage 
            id="fourlaws.main2"
            defaultMessage=" "
          />
        </span>
        <FormattedMessage 
          id="fourlaws.main3"
          defaultMessage="Heard of the Four Spiritual Laws?"
        />
      </PageText>
      <BottomNavigation 
        nextLink={FourLawsPaths.MAIN_WRAPUP}
      />
    </React.Fragment>
  );
};

export default MainTitle;