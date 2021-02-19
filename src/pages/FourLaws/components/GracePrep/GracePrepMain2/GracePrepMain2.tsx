import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './GracePrepMain2.css';

const GracePrepMain2: React.FC = () => {
  const intl = useIntl();
  const language = (intl.locale === 'ko') ? 'Korean': 'English';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className={`Law-Sentence-Center Law-Sentence-Bold Law-GracePrepMain2-${language}`}>
        <FormattedMessage 
          id="fourlaws.grace.prep.main.two"
          defaultMessage={'If you receive Christ by faith, as an act of the will, many things will happen, including the following:'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.GRACE_PREP_MAIN_1}
        nextTo={FourLawsPaths.GRACE_PREP_1}
      />
    </React.Fragment>
  );
};

export default GracePrepMain2;