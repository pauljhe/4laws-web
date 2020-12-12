import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawTwo2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Content">
        <FormattedMessage 
          id="fourlaws.law2.two"
          defaultMessage={"Man was created to have fellowship with God; but, because of his stubborn self-will, " + 
                          "he chose to go his own independent way and fellowship with God was broken. " + 
                          "This self-will, characterized by an attitude of active rebellion or passive indifference, " + 
                          "is evidence of what the Bible calls sin."}
        />
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_TWO_1}
        nextTo={FourLawsPaths.LAW_TWO_3}
      />
    </React.Fragment>
  );
};

export default LawTwo2;