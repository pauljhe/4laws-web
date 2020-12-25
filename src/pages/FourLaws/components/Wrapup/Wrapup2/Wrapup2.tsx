import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Wrapup2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-Sentence-Center Law-Sentence-Bold">
        <div>
          <FormattedMessage 
            id="fourlaws.wrapup.two"
            defaultMessage={'Take the initiative; call or visit a nearby church where Christ is honored and His Word is preached. ' + 
                            'Start this week, and make plans to attend regularly.'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.WRAPUP_1}
        nextTo={FourLawsPaths.WRAPUP_3}
      />
    </React.Fragment>
  );
};

export default Wrapup2;