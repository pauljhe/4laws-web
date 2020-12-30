import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import { AppState } from '../../../../../../state/reducer';
import { FourLawsPaths } from '../../../../../paths';

const ConfirmFirst2: React.FC = () => {
  const showConfirmFirstQ: boolean = useSelector((state: AppState) => state.showConfirmFirstQ);
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT}>
        <FormattedMessage 
          id="fourlaws.confirm.first.two"
          defaultMessage={'Christ said that He would come into your life. Would He mislead you? ' + 
                          'Therefore, how do you know that God has answered your prayer? ' + 
                          '(The trustworthiness of God Himself and His Word, the Bible, in other words, God keeps His Promises).'}
        />
      </PageText>
      <BottomNavigation 
        previousTo={(showConfirmFirstQ) ? FourLawsPaths.CONFIRM_FIRST_Q_6 : FourLawsPaths.CONFIRM_FIRST_1}
        nextTo={FourLawsPaths.CONFIRM_SECOND}
      />
    </React.Fragment>
 
  );
};

export default ConfirmFirst2;