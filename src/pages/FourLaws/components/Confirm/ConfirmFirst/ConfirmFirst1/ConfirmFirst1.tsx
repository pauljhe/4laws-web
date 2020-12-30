import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import Link from '../../../../../../components/Link';
import PageText from '../../../../../../components/PageText';
import { PageTextType } from '../../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../../paths';
import './ConfirmFirst1.css';

const ConfirmFirst1: React.FC = () => {
  const dispatch = useDispatch();
  const onDontknowClick = () => {
    dispatch(actionCreators.setShowConfirmFirstQ(true));
  };

  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className="Law-Sentence-Center Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.confirm.first.one"
            defaultMessage="As you prayed, did you receive Christ into your life? According to His promise in Revelation 3:20, where is Christ right now in relation to you?"
          />
        </div>
        <div className="Law-Question-Answer-Single">
          <Link to={FourLawsPaths.CONFIRM_FIRST_Q} onClick={onDontknowClick}>
            <FormattedMessage 
              id="fourlaws.confirm.first.one.dontknow"
              defaultMessage="I don't know"
            />
          </Link>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_MAIN}
        nextTo={FourLawsPaths.CONFIRM_FIRST_2}
      />
    </div>
  );
};

export default ConfirmFirst1;