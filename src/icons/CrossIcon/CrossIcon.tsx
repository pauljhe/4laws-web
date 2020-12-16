import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/CrossIcon.svg';

interface ICrossIconProps {
  className?: string | undefined;
}

const CrossIcon: React.FC<ICrossIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default CrossIcon;