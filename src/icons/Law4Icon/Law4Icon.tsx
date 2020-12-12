import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law4Icon-ko.svg';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law4Icon-en.svg';
import { useIntl } from 'react-intl';

interface ILaw4IconProps {
  className?: string | undefined;
}

const Law4Icon: React.FC<ILaw4IconProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law4Icon;