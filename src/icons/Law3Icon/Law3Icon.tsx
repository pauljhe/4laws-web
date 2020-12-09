import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/Law3Icon.svg';

interface ILaw3IconProps {
  className?: string | undefined;
}

const Law3Icon: React.FC<ILaw3IconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default Law3Icon;