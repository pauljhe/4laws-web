import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawOne1.css';

const LawOne1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawOne-Content">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law1.one.title"
            defaultMessage="God's Love"
          />
        </div>
        <div className="LawOne-One-Content">
          <FormattedMessage 
            id="fourlaws.law1.one.content"
            defaultMessage={'"For God so loved the world, that He gave His only begotten Son,' + 
                            ' that whoever believes in Him should not perish, but have eternal life" (John 3:16).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_ONE_TITLE}
        nextTo={FourLawsPaths.LAW_ONE_2}
      />
    </React.Fragment>
  );
};

export default LawOne1;