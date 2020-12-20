import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Prayer3: React.FC = () => {
  const intl = useIntl();
  const yesText = intl.formatMessage({
    id: "fourlaws.prayer.three.yes",
    defaultMessage: "Yes"
  });
  const noText = intl.formatMessage({
    id: "fourlaws.prayer.three.no",
    defaultMessage: "No"
  });
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.prayer.three"
            defaultMessage="Does this prayer express the desire of your heart?"
          />
        </div>
      </PageText>
      <div className="Law-Question-Answer">
        <BottomNavigation 
          previousTo={FourLawsPaths.PRAYER_4}
          previousText={yesText}
          nextTo={FourLawsPaths.PRAYER_3}
          nextText={noText}
          hideArrow={true}
        />
      </div>
      <BottomNavigation 
        previousTo={FourLawsPaths.PRAYER_2}
      />
    </div>
  );
};

export default Prayer3;