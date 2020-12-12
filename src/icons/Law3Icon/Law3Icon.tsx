import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law3Icon-ko.svg';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law3Icon-en.svg';
import { useIntl } from 'react-intl';

interface ILaw3IconProps {
  className?: string | undefined;
}

const Law3Icon: React.FC<ILaw3IconProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law3Icon;