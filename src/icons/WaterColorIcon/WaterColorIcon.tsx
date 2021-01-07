import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/WaterColor.svg';

interface IWaterColorIconProps {
  className?: string | undefined;
}

const WaterColorIcon: React.FC<IWaterColorIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default WaterColorIcon;