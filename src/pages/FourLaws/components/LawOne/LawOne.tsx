import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import LawOneRoutes from './LawOneRoutes';
import './LawOne.css';
import InfoIcon from '@material-ui/icons/Info';

const LawOne: React.FC = () => {
  const Icon = <InfoIcon className="PageTitle-Icon" />;
  const isTitle: boolean = window.location.href.endsWith(FourLawsPaths.LAW_ONE_TITLE);
  const isWrapup: boolean = window.location.href.endsWith(FourLawsPaths.LAW_ONE_WRAPUP);
  return (
    <React.Fragment>
      {
        (isWrapup) ? null:
        <PageTitle
          className="LawOne-PageTitle"
          icon={Icon}
          type={PageTextType.CONTENT}
          minimized={!isTitle}
        >
          <FormattedMessage 
            id="fourlaws.law1.title"
            defaultMessage={'God LOVES you, and offers a wonderful PLAN for your life.'}
          />
        </PageTitle>
      }
      <div className="LawOne-PageContent">
        <LawOneRoutes />
      </div>
    </React.Fragment>
  );
};

export default LawOne;