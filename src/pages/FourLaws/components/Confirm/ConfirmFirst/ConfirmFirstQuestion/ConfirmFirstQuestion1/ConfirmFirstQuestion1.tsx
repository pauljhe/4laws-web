import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from '../../../../../../../components/Link';
import BottomNavigation from '../../../../../../../components/BottomNavigation';
import PageText from '../../../../../../../components/PageText';
import { ConfirmFirstResponseType, PageTextType } from '../../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../../paths';
import { useDispatch } from 'react-redux';
import actionCreators from '../../../../../../../state/actionCreators';
import './ConfirmFirstQuestion1.css';

const ConfirmFirstQuestion1: React.FC = () => {
  const dispatch = useDispatch();
  const onDontknowClick = () => {
    dispatch(actionCreators.setConfirmFirstResponseType(ConfirmFirstResponseType.QUESTION));
  };

  const onNextClick = () => {
    dispatch(actionCreators.setConfirmFirstResponseType(ConfirmFirstResponseType.DONT_KNOW));
  };

  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div className="Law-Sentence-Margin">
          <FormattedMessage 
            id="fourlaws.law4.four.content"
            defaultMessage={'(Christ speaking): "Behold, I stand at the door and knock; ' + 
                            'if anyone hears My voice and opens the door, I will come in to him" (Revelation 3:20).'}
          />
        </div>
        <div className="Law-Sentence-Center Law-Question-Below-words Law-Confirm1-Question1">
          <FormattedMessage 
            id="fourlaws.confirm.first.question.one"
            defaultMessage="According to His promise in Revelation 3:20, where is Christ right now in relation to you?"
          />
        </div>
        <div className="Law-Question-Answer-Single Below-words">
          <Link to={FourLawsPaths.CONFIRM_FIRST_Q_2} onClick={onDontknowClick}>
            <FormattedMessage 
              id="fourlaws.confirm.first.question.one.dontknow"
              defaultMessage="I don't know"
            />
          </Link>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_FIRST_1}
        nextTo={FourLawsPaths.CONFIRM_FIRST_2}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default ConfirmFirstQuestion1;