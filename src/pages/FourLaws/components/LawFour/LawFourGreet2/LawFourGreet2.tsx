import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';
import Law4DiagramRight from '../../../../../icons/Law4DiagramRight';
import CircleIcon from '../../../../../icons/CircleIcon';
import CrossIcon from '../../../../../icons/CrossIcon';

const LawFourGreet2: React.FC = () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="LawFour-Greet-Description">
        <div className="Law-SubTitle LawFour-SubTitle-MarginLeft">
          <FormattedMessage 
            id="fourlaws.law4.greet.two.title"
            defaultMessage="CHRIST-DIRECTED LIFE"
          />
        </div>
        <div className="LawFour-Greet-Description-flex">
          <Law4DiagramRight />
          <div className="LawFour-Greet-Content">
            <div className="LawFour-Greet-Row">
              <div className="LawFour-Greet-Row">
                <CrossIcon className="LawFour-Icon-Inline" />
                {'-'}
              </div>
              <div className="LawFour-Greet-Sentence">
                <FormattedMessage 
                  id="fourlaws.law4.greet.two.line1"
                  defaultMessage={"Christ is in the life and on the throne"}
                />
              </div>
            </div>
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
                  id="fourlaws.law4.greet.two.line2"
                  defaultMessage={"Self is yielding to Christ"}
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
                  id="fourlaws.law4.greet.two.line3"
                  defaultMessage={"Interests are directed by Christ, resulting in harmony with God's plan."}
                />
              </div>
            </div>
          </div>
        </div>
      </PageText>
      <BottomNavigation 
        previousTo={FourLawsPaths.LAW_FOUR_GREET_1}
        nextTo={FourLawsPaths.LAW_FOUR_GREET_3}
      />
    </React.Fragment>
  );
};

export default LawFourGreet2;