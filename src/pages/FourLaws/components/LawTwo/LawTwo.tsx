import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import LawTwoRoutes from './LawTwoRoutes';
import './LawTwo.css';
import Law2Icon from '../../../../icons/Law2Icon';

const LawTwo: React.FC = () => {
  const Icon = <Law2Icon className="PageTitle-Icon" />;
  const isTitle: boolean = window.location.href.endsWith(FourLawsPaths.LAW_TWO_TITLE);
  const isWrapup: boolean = window.location.href.endsWith(FourLawsPaths.LAW_TWO_WRAPUP);
  return (
    <React.Fragment>
      {
        (isWrapup) ? null:
        <PageTitle
          className="Law-PageTitle LawTwo-PageTitle"
          icon={Icon}
          type={PageTextType.CONTENT}
          minimized={!isTitle}
        >
          <FormattedMessage 
            id="fourlaws.law2.title"
            defaultMessage={'Man is SINFUL and SEPARATED from God. Therefore, he cannot know and experience God\'s love and plan for his life.'}
          />
        </PageTitle>
      }
      <div className="Law-PageContent">
        <LawTwoRoutes />
      </div>
    </React.Fragment>
  );
};

export default LawTwo;