import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import LawFourRoutes from './LawFourRoutes';
import './LawFour.css';
import Law4Icon from '../../../../icons/Law4Icon';

const LawFour: React.FC = () => {
  const Icon = <Law4Icon className="PageTitle-Icon" />;
  const currentUrl = window.location.href;
  const isTitle: boolean = currentUrl.endsWith(FourLawsPaths.LAW_FOUR_TITLE);
  const hideTitle: boolean = currentUrl.endsWith(FourLawsPaths.LAW_FOUR_WRAPUP) || currentUrl.includes(FourLawsPaths.LAW_FOUR_GREET);
  return (
    <React.Fragment>
      {
        (hideTitle) ? null:
        <PageTitle
          className="Law-PageTitle LawFour-PageTitle"
          icon={Icon}
          type={PageTextType.CONTENT}
          minimized={!isTitle}
        >
          <FormattedMessage 
            id="fourlaws.law4.title"
            defaultMessage={'We must individually RECEIVE Jesus Christ as Savior and Lord; then we can know and experience God\'s love and plan for our lives.'}
          />
        </PageTitle>
      }
      <div className="Law-PageContent">
        <LawFourRoutes />
      </div>
    </React.Fragment>
  );
};

export default LawFour;