import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './MainWrapup.css';

const MainWrapup: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className={`FourLawsMain-PageText FourLawsMain-Wrapup-${language}`}>
        <FormattedMessage 
          id="fourlaws.main.wrapup"
          defaultMessage={'Just as there are physical laws that govern the physical universe, ' + 
                          'so are there spiritual laws which govern your relationship with God.'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.MAIN_TITLE}
        nextTo={FourLawsPaths.LAW_ONE}
      />
    </React.Fragment>
 
  );
};

export default MainWrapup;