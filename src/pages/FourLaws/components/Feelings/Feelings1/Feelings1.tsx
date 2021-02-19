import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Feelings2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Center Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.feelings.one.line1"
            defaultMessage="DO NOT DEPEND UPON FEELINGS"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.feelings.one.line2"
            defaultMessage={'The promise of God\'s Word, not our feelings, is our authority. ' + 
                            'The Christian lives by faith (trust) in the trustworthiness of God Himself and His Word.'}
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_THIRD_2}
        nextTo={FourLawsPaths.FEELINGS_2}
      />
    </React.Fragment>
  );
};

export default Feelings2;