import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { ConfirmFirstResponseType, PageTextType } from '../../../../../../interfaces/page.interfaces';
import { AppState } from '../../../../../../state/reducer';
import { FourLawsPaths } from '../../../../../paths';

const ConfirmFirst2: React.FC = () => {
  const confirmFirstResponse: ConfirmFirstResponseType | undefined = useSelector((state: AppState) => state.confirmFirstResponse);
  let previousTo: string;
  if (confirmFirstResponse === ConfirmFirstResponseType.DONT_KNOW) {
    previousTo = FourLawsPaths.CONFIRM_FIRST_Q_1;
  } else if (confirmFirstResponse === ConfirmFirstResponseType.QUESTION) {
    previousTo = FourLawsPaths.CONFIRM_FIRST_Q_6;
  } else {
    previousTo = FourLawsPaths.CONFIRM_FIRST_1;
  }
  
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-LongSentence">
        <FormattedMessage 
          id="fourlaws.confirm.first.two"
          defaultMessage={'Christ said that He would come into your life. Would He mislead you? ' + 
                          'Therefore, how do you know that God has answered your prayer? ' + 
                          '(The trustworthiness of God Himself and His Word, the Bible. In other words, God keeps His Promises).'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={previousTo}
        nextTo={FourLawsPaths.CONFIRM_SECOND}
      />
    </React.Fragment>
 
  );
};

export default ConfirmFirst2;