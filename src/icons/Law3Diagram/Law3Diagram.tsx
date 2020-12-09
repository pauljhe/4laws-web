import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as EnglishIcon } from '../../assets/icons/Law3Diagram-en.svg';
import { ReactComponent as KoreanIcon } from '../../assets/icons/Law3Diagram-ko.svg';

interface ILaw3DiagramProps {
  className?: string | undefined;
}

const Law3Diagram: React.FC<ILaw3DiagramProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default Law3Diagram;