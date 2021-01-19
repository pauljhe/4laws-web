import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../paths';
import './LawFourWrapupPrep.css';

const LawFourWrapupPrep: React.FC = () => {
  const dispatch = useDispatch();
  const onPreviousClick = () => {
    dispatch(actionCreators.setGreetSecondAnswer(undefined));
  };

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Wrapup-Prep Law-PageContent Law-Sentence-Bold">
        <div className="Law-Sentence-Center">
          <FormattedMessage 
            id="fourlaws.law4.wrapup.prep"
            defaultMessage="That's all right. But someday, you may want to invite Jesus Christ into your life. I would like to show you how to receive Jesus Christ when that day comes."
          />
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_4}
        nextTo={FourLawsPaths.PRAYER}
        onPreviousClick={onPreviousClick}
      />
    </React.Fragment>
 
  );
};

export default LawFourWrapupPrep;