import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './GracePrepMain1.css';

const GracePrepMain1: React.FC = () => {
  const intl = useIntl();
  const isKorean = intl.locale === 'ko';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className={`Law-Sentence-Center Law-Sentence-Bold${(isKorean) ? ' Grace-Prep-Main-One' : ''}`}>
        <FormattedMessage 
          id="fourlaws.grace.prep.main.one"
          defaultMessage={'I would like to tell you what will happen if you receive Christ.'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_3}
        nextTo={FourLawsPaths.GRACE_PREP_MAIN_2}
      />
    </React.Fragment>
  );
};

export default GracePrepMain1;