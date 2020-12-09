import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/Law4Icon.svg';

interface ILaw4IconProps {
  className?: string | undefined;
}

const Law4Icon: React.FC<ILaw4IconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default Law4Icon;