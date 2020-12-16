import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/CircleIcon.svg';

interface ICircleIconProps {
  className?: string | undefined;
}

const CircleIcon: React.FC<ICircleIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default CircleIcon;