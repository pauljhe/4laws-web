import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law1Icon-ko.svg';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law1Icon-en.svg';
import { useIntl } from 'react-intl';

interface ILaw1IconProps {
  className?: string | undefined;
}

const Law1Icon: React.FC<ILaw1IconProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law1Icon;