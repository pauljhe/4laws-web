import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';
import './Link.css';

export interface IAppLinkProps {
  to: string;
  onClick?: () => void;
}

const AppLink: React.FC<IAppLinkProps> = (props) => {
  const { to, onClick } = props;
  const intl = useIntl();
  const toWithLocale = `/${intl.locale}${to}`;
  return (
    <Link className="AppLink" to={toWithLocale} onClick={onClick}>
      <PageText type={PageTextType.CONTENT}>
        { props.children }
      </PageText>
    </Link>
    
  );
};

export default AppLink;