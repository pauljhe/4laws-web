import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import logoFull from '../../assets/icons/Logo-full.svg';
import logoMin from '../../assets/icons/Logo-min.svg';

interface ILogoProps {
  className?: string | undefined;
}

const Logo: React.FC<ILogoProps> = (props) => {
  const showFull = useMediaQuery('(min-width:1280px)');
  return (
    <img className={props.className} src={(showFull) ? logoFull : logoMin} alt="Logo" />
  );
};

export default Logo;