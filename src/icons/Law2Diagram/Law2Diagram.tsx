import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law2Diagram-en.svg';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law2Diagram-ko.svg';

interface ILaw2DiagramProps {
  className?: string | undefined;
}

const Law2Diagram: React.FC<ILaw2DiagramProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law2Diagram;