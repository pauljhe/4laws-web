import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/ArrowIcon.svg';

interface IArrowIconProps {
  className?: string | undefined;
}

const ArrowIcon: React.FC<IArrowIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default ArrowIcon;