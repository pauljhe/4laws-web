import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import Answer from '../../../../../../components/Answer';
import BottomNavigation from '../../../../../../components/BottomNavigation';
import Link from '../../../../../../components/Link';
import PageText from '../../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../../paths';
import './ConfirmFirst1.css';

const ConfirmFirst1: React.FC = () => {
  const intl = useIntl();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAnswerType = query.get(PageType.KEY) === PageType.ANSWER;
  const answer = intl.formatMessage({
    id: "fourlaws.confirm.first.one.answer",
    defaultMessage: "In my heart or life"
  });
  return (
    <div className="Law-Question">
      <PageText type={PageTextType.CONTENT}>
        <div className="Law-Sentence-Center">
          {
            (isAnswerType) ? null:
            <FormattedMessage 
              id="fourlaws.confirm.first.one.line1"
              defaultMessage="As you prayed, did you receive Christ into your life? "
            />
          }
          <FormattedMessage 
            id="fourlaws.confirm.first.one.line2"
            defaultMessage="According to His promise in Revelation 3:20, where is Christ right now in relation to you?"
          />
        </div>
        {
          (isAnswerType) ? <Answer className="Law-Question-Answer-Animated Answer-Confirm-first1" answer={answer}></Answer> :
          <div className="Law-Question-Answer-Single">
            <Link to={FourLawsPaths.CONFIRM_FIRST_Q}>
              <FormattedMessage 
                id="fourlaws.confirm.first.one.dontknow"
                defaultMessage="I don't know"
              />
            </Link>
          </div>
        }
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.CONFIRM_MAIN}
        nextTo={FourLawsPaths.CONFIRM_FIRST_2}
      />
    </div>
  );
};

export default ConfirmFirst1;