import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import Link from '../../../../../../components/Link';
import PageText from '../../../../../../components/PageText';
import { ConfirmFirstResponseType, PageTextType } from '../../../../../../interfaces/page.interfaces';
import actionCreators from '../../../../../../state/actionCreators';
import { FourLawsPaths } from '../../../../../paths';
import './ConfirmFirst1.css';

const ConfirmFirst1: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const onDontknowClick = () => {
    dispatch(actionCreators.setConfirmFirstResponseType(ConfirmFirstResponseType.DONT_KNOW));
  };

  const onNextClick = () => {
    dispatch(actionCreators.setConfirmFirstResponseType(undefined));
  };

  const language = (intl.locale === 'ko') ? 'Korean': 'English';

  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent">
        <div className={`Law-Sentence-Center Law-Sentence-Bold Law-ConfirmFirst1-Question-${language}`}>
          <FormattedMessage 
            id="fourlaws.confirm.first.one"
            defaultMessage="As you prayed did you receive Christ into your life? Because of His promise in Revelation 3:20, where is Christ right now in relation to you?"
          />
        </div>
        <div className="Law-Question-Answer-Single">
          <Link to={FourLawsPaths.CONFIRM_FIRST_Q} onClick={onDontknowClick}>
            <FormattedMessage 
              id="fourlaws.confirm.first.one.dontknow"
              defaultMessage="Review Revelation 3:20"
            />
          </Link>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_MAIN}
        nextTo={FourLawsPaths.CONFIRM_FIRST_2}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default ConfirmFirst1;