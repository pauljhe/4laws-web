import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import Law4DiagramLeft from '../../../../../icons/Law4DiagramLeft';
import CrossIcon from '../../../../../icons/CrossIcon';
import CircleIcon from '../../../../../icons/CircleIcon';

const LawFourGreet1: React.FC = () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Greet-Description">
        <div className="Law-SubTitle LawFour-SubTitle-MarginLeft">
          <FormattedMessage 
            id="fourlaws.law4.greet.one.title"
            defaultMessage="SELF-DIRECTED LIFE"
          />
        </div>
        <div className="LawFour-Greet-Description-flex">
          <Law4DiagramLeft />
          <div className="LawFour-Greet-Content">
            <div className="LawFour-Greet-Row">
              <div className="LawFour-Greet-Row">
                <span className={(intl.locale === "ko") ? "Prefix-Span-Korean" : "Prefix-Span"}>
                  <FormattedMessage 
                    id="fourlaws.law4.greet.self"
                    defaultMessage="S"
                  />
                </span>
                {'-'}
              </div>
              <div className="LawFour-Greet-Sentence">
                <FormattedMessage 
                  id="fourlaws.law4.greet.one.line1"
                  defaultMessage={"Self is on the throne"}
                />
              </div>
            </div>
            <div className="LawFour-Greet-Row">
              <div className="LawFour-Greet-Row">
                <CrossIcon className="LawFour-Icon-Inline" />
                {'-'}
              </div>
              <div className="LawFour-Greet-Sentence">
                <FormattedMessage 
                  id="fourlaws.law4.greet.one.line2"
                  defaultMessage={"Christ is outside the life"}
                />
              </div>
            </div>
            <div className="LawFour-Greet-Row">
              <div className="LawFour-Greet-Row">
                <CircleIcon className="LawFour-Icon-Inline" />
                {'-'}
              </div>
              <div className="LawFour-Greet-Sentence">
                <FormattedMessage 
                  id="fourlaws.law4.greet.one.line3"
                  defaultMessage={"Interests are directed by self, often resulting in discord and frustration."}
                />
              </div>
            </div>
          </div>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_0}
        nextTo={FourLawsPaths.LAW_FOUR_GREET_2}
      />
    </React.Fragment>
  );
};

export default LawFourGreet1;