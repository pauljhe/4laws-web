import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './DiagramLink.css';

export interface IDiagramLinkProps {
  to: string;
  className?: string | undefined;
  onClick?: () => void;
}

const DiagramLink: React.FC<IDiagramLinkProps> = (props) => {
  const { to, onClick } = props;
  const intl = useIntl();
  const toWithLocale = `/${intl.locale}${to}`;
  let className = "DiagramLink";
  if (props.className) className += ' ' + props.className;
  return (
    <Link to={toWithLocale} className={className} onClick={onClick}>
      { props.children }
    </Link>
  );
};

export default DiagramLink;