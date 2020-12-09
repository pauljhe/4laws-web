import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/Law2Icon.svg';

interface ILaw2IconProps {
  className?: string | undefined;
}

const Law2Icon: React.FC<ILaw2IconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default Law2Icon;