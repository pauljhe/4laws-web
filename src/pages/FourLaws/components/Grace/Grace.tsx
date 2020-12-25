import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import GraceRoutes from './GraceRoutes';
import PageText from '../../../../components/PageText';

const Grace: React.FC = () => {
  const isTitle: boolean = window.location.href.endsWith(FourLawsPaths.GRACE_TITLE);
  const isWrapup: boolean = window.location.href.endsWith(FourLawsPaths.GRACE_WRAPUP_1) ||
                            window.location.href.endsWith(FourLawsPaths.GRACE_WRAPUP_2) ||
                            window.location.href.endsWith(FourLawsPaths.GRACE_WRAPUP_3);
  return (
    <div className="Law-PageContent">
      {
        (isWrapup) ? null:
        <PageText type={PageTextType.CONTENT} className={`Law-Sentence-Center Law-Title-Animated${(!isTitle && !isWrapup) ? ' Law-Title-Animated-content' : ''}`}>
          <div className="Law-Title-Animated-line-one Law-Sentence-Bold Law-Sentence-Margin">
            <FormattedMessage 
              id="fourlaws.grace.title.line1"
              defaultMessage="NOW THAT YOU HAVE RECEIVED CHRIST"
            />
          </div>
          <div className="Law-Title-Animated-line-two">
            <FormattedMessage 
              id="fourlaws.grace.title.line2"
              defaultMessage="The moment that you received Christ by faith, as an act of the will, many things happened, including the following:"
            />
          </div>
        </PageText>
      }
      <GraceRoutes />
    </div>
  );
};

export default Grace;