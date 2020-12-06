import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawOne1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawOne-Content">
        <div className="LawOne-SubTitle">
          <FormattedMessage 
            id="fourlaws.law1.one.title"
            defaultMessage="God's Love"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law1.one.content"
            defaultMessage={'"For God so loved the world, that He gave His only begotten Son,' + 
                            ' that whoever believes in Him should not perish, but have eternal life" (John 3:16).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_ONE_TITLE}
        nextLink={FourLawsPaths.LAW_ONE_2}
      />
    </React.Fragment>
  );
};

export default LawOne1;