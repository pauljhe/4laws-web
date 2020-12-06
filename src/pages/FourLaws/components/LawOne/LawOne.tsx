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
  return (
    <React.Fragment>
      <PageTitle
        className="LawOne-PageTitle"
        icon={Icon}
        type={PageTextType.CONTENT}
        minimized={!window.location.href.endsWith(FourLawsPaths.LAW_ONE_TITLE)}
      >
        <FormattedMessage 
          id="fourlaws.law1.title"
          defaultMessage={'God LOVES you, and offers a wonderful PLAN for your life.'}
        />
      </PageTitle>
      <LawOneRoutes />
    </React.Fragment>
  );
};

export default LawOne;