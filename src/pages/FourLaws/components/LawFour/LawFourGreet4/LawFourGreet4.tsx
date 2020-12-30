import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType, PageType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import DiagramLink from '../../../../../components/DiagramLink';
import Law4DiagramLeft from '../../../../../icons/Law4DiagramLeft';
import Law4DiagramRight from '../../../../../icons/Law4DiagramRight';
import { useDispatch } from 'react-redux';
import actionCreators from '../../../../../state/actionCreators';

const LawFourGreet4: React.FC = () => {
  const dispatch = useDispatch();
  const onLeftClick = () => {
    dispatch(actionCreators.setGreetSecondAnswer(PageType.PREP));
  };

  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Content">
        <div className="LawFour-Greet-Title Law-Sentence-Bold">
          <FormattedMessage 
            id="fourlaws.law4.greet.four"
            defaultMessage="Which circle would you like to have represent your life?"
          />
        </div>
        <div className="LawFour-Greet-flex">
          <DiagramLink to={FourLawsPaths.LAW_FOUR_WRAPUP_PREP} onClick={onLeftClick}>
            <Law4DiagramLeft />
          </DiagramLink>
          <DiagramLink to={FourLawsPaths.LAW_FOUR_WRAPUP}>
            <Law4DiagramRight />
          </DiagramLink>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_3}
      />
    </React.Fragment>
  );
};

export default LawFourGreet4;