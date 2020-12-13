import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Prayer2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.prayer.two"
            defaultMessage="The following is a suggested prayer:"
          />
        </div>
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.prayer"
            defaultMessage={'"Lord Jesus, I need You. Thank You for dying on the cross for my sins. ' + 
                            'I open the door of my life and receive You as my Savior and Lord. ' + 
                            'Thank You for forgiving my sins and giving me eternal life. Take control of the throne of my life. ' + 
                            'Make me the kind of person You want me to be."'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_1}
        nextTo={FourLawsPaths.PRAYER_3}
      />
    </React.Fragment>
  );
};

export default Prayer2;