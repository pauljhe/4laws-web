import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/Law1Icon.svg';

interface ILaw1IconProps {
  className?: string | undefined;
}

const Law1Icon: React.FC<ILaw1IconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default Law1Icon;