import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import LawThreeRoutes from './LawThreeRoutes';
import './LawThree.css';
import Law3Icon from '../../../../icons/Law3Icon';

const LawThree: React.FC = () => {
  const Icon = <Law3Icon className="PageTitle-Icon" />;
  const isTitle: boolean = window.location.href.endsWith(FourLawsPaths.LAW_THREE_TITLE);
  const isWrapup: boolean = window.location.href.endsWith(FourLawsPaths.LAW_THREE_WRAPUP);
  return (
    <React.Fragment>
      {
        (isWrapup) ? null:
        <PageTitle
          className="LawThree-PageTitle"
          icon={Icon}
          type={PageTextType.CONTENT}
          minimized={!isTitle}
        >
          <FormattedMessage 
            id="fourlaws.law3.title"
            defaultMessage={'Jesus Christ is God\'s ONLY provision for man\'s sin. Through Him you can know and experience God\'s love and plan for your life.'}
          />
        </PageTitle>
      }
      <div className="LawThree-PageTitle-Placeholder"></div>
      <div className="LawThree-PageContent">
        <LawThreeRoutes />
      </div>
    </React.Fragment>
  );
};

export default LawThree;