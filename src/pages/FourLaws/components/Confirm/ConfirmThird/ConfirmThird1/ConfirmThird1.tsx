import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../paths';
import './ConfirmThird1.css';

const ConfirmThird1: React.FC = () => {
  const intl = useIntl();
  const isKorean = intl.locale === 'ko';
  const isDesktopView = useMediaQuery('(min-width:1280px)');
  const address = intl.formatMessage({
    id: "fourlaws.confirm.third.words.address",
    defaultMessage: ""
  });
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin Law-Sentence-Center Law-Sentence-Bold Law-ConfirmThird-1-Title">
          <FormattedMessage 
            id="fourlaws.confirm.third.one"
            defaultMessage="Thank God often that Christ is in your life and that He will never leave you."
          />
        </div>
        <div>
          <FormattedMessage 
            id="fourlaws.confirm.third.words"
            defaultMessage={'"...for He Himself has said I will never leave you, nor will I ever forsake you" (Hebrews 13:5)'}
          />
          {
            (!isKorean || isDesktopView) ? null: (" " + address)
          }
        </div>
        {
          (!isKorean || !isDesktopView) ? null :
          <div>
            { address }
          </div>
        }
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_SECOND_Q_5}
        nextTo={FourLawsPaths.CONFIRM_THIRD_Q}
      />
    </React.Fragment>
  );
};

export default ConfirmThird1;