import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law2Icon-ko.svg';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law2Icon-en.svg';
import { useIntl } from 'react-intl';

interface ILaw2IconProps {
  className?: string | undefined;
}

const Law2Icon: React.FC<ILaw2IconProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law2Icon;