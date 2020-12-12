import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawTwo1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawTwo-Content">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law2.one.title"
            defaultMessage="Man is Sinful"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law2.one.content"
            defaultMessage={'"For all have sinned and fall short of the glory of God" (Romans 3:23).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_TWO_TITLE}
        nextTo={FourLawsPaths.LAW_TWO_2}
      />
    </React.Fragment>
  );
};

export default LawTwo1;