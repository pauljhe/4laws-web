import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const LawFour1: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-SubTitle">
          <FormattedMessage 
            id="fourlaws.law4.one.title"
            defaultMessage="We Must Receive Christ"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.law4.one.content"
            defaultMessage={'"But as many as received Him, to them He gave the right to become children of God, even to those who believe in his name" (John 1:12)'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousLink={FourLawsPaths.LAW_FOUR_TITLE}
        nextLink={FourLawsPaths.LAW_FOUR_2}
      />
    </React.Fragment>
  );
};

export default LawFour1;