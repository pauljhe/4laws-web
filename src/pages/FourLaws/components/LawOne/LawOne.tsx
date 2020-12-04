import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import LawOneRoutes from './LawOneRoutes';

const LawOne: React.FC = () => {
  const Icon = <div style={{ width: '100px', height: '100px', border: '1px solid black' }}></div>;
  return (
    <React.Fragment>
      <PageTitle
        icon={Icon}
        type={PageTextType.CONTENT}
      >
        <FormattedMessage 
          id="fourlaws.law1.title"
          defaultMessage={'Just as there are physical laws that govern the physical universe,' + 
                          ' so are there spiritual law which govern your relationship with God.'}
        />
      </PageTitle>
      <LawOneRoutes />
    </React.Fragment>
  );
};

export default LawOne;