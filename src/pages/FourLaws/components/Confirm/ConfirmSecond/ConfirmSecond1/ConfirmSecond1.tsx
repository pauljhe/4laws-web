import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../paths';

const ConfirmSecond1: React.FC = () => {
  const intl = useIntl();
  const isKorean = intl.locale === 'ko';
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Center Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.confirm.second.one.title"
            defaultMessage="The Bible Promises Eternal Life to All Who Receive Christ"
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.confirm.second.words"
            defaultMessage={'"And the witness is this, that God has given us eternal life, ' + 
                            'and this life is in His Son. He who has the Son has the life; ' + 
                            'he who does not have the Son of God does not have life. ' + 
                            'These things I have written to you who believe in the name of the Son of God, ' + 
                            'in order that you may know that you have eternal life" (1 John 5:11-13).'}
          />
        </div>
        {
          (!isKorean) ? null:
          <div>
            <FormattedMessage 
              id="fourlaws.confirm.second.words.address"
              defaultMessage=""
            />
          </div>
        }
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_FIRST_2}
        nextTo={FourLawsPaths.CONFIRM_SECOND_Q}
      />
    </React.Fragment>
  );
};

export default ConfirmSecond1;