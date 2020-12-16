import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawOneWrapup.css';

const LawOneWrapup: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        <div className="LawOne-Wrapup Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.law1.wrapup"
            defaultMessage={'Why is it that most people are not experiencing the abundant life? Because...'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_ONE_2}
        nextTo={FourLawsPaths.LAW_TWO}
      />
    </React.Fragment>
 
  );
};

export default LawOneWrapup;