import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law4DiagramLeft-en.svg';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law4DiagramLeft-ko.svg';

interface ILaw4DiagramLeftProps {
  className?: string | undefined;
}

const Law4DiagramLeft: React.FC<ILaw4DiagramLeftProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law4DiagramLeft;