import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';
import './Link.css';

export interface IAppLinkProps {
  to: string;
}

const AppLink: React.FC<IAppLinkProps> = (props) => {
  const { to } = props;
  const intl = useIntl();
  const toWithLocale = `/${intl.locale}${to}`;
  return (
    <Link className="AppLink" to={toWithLocale}>
      <PageText type={PageTextType.CONTENT}>
        { props.children }
      </PageText>
    </Link>
    
  );
};

export default AppLink;