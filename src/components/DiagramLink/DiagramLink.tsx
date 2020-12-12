import React from 'react';
import { Link } from 'react-router-dom';
import './DiagramLink.css';

export interface IDiagramLinkProps {
  to: string;
  className?: string | undefined;
}

const DiagramLink: React.FC<IDiagramLinkProps> = (props) => {
  let className = "DiagramLink";
  if (props.className) className += ' ' + props.className;
  return (
    <Link to={props.to} className={className}>
      { props.children }
    </Link>
  );
};

export default DiagramLink;