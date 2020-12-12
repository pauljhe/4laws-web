import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as EnglishIcon } from '../../assets/icons/TrainDiagram-en.svg';
import { ReactComponent as KoreanIcon } from '../../assets/icons/TrainDiagram-ko.svg';

interface ITrainDiagramProps {
  className?: string | undefined;
}

const TrainDiagram: React.FC<ITrainDiagramProps> = (props) => {
  const intl = useIntl();
  const Icon = (intl.locale === 'ko') ? <KoreanIcon /> : <EnglishIcon />;
  return (
    <SvgIcon {...props}>
      { Icon }
    </SvgIcon>
  );
};

export default TrainDiagram;