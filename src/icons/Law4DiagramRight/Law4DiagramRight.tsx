import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law4DiagramRight-en.svg';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law4DiagramRight-ko.svg';

interface ILaw4DiagramRightProps {
  className?: string | undefined;
}

const Law4DiagramRight: React.FC<ILaw4DiagramRightProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law4DiagramRight;