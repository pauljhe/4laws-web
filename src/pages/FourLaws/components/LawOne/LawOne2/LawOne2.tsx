import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import './LawOne2.css';

const LawOne2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawOne-Content Law-LongSentence">
        <div className="Law-SubTitle">
          <FormattedMessage 
            id="fourlaws.law1.two.title"
            defaultMessage="God's Plan"
          />
        </div>
        <div className="LawOne-Two-Content">
          <FormattedMessage 
            id="fourlaws.law1.two.content"
            defaultMessage={'(Christ speaking) "I came that they might have life, and might have it abundantly"' + 
                            ' (that it might be full and meaningful) (John 10:10).'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_ONE_1}
        nextTo={FourLawsPaths.LAW_ONE_WRAPUP}
      />
    </React.Fragment>
  );
};

export default LawOne2;