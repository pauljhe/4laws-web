import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Prayer4: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.prayer.four"
            defaultMessage="If it does, I invite you to pray this prayer right now, and Christ will come into your life, as He promised."
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
        previousTo={FourLawsPaths.PRAYER_3}
        nextTo={FourLawsPaths.PRAYER_4}
      />
    </React.Fragment>
  );
};

export default Prayer4;