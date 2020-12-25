import { Dialog, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Stepper from '../Stepper';
import './Dialog.css';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';

export interface IAppDialogProps {
  title?: React.ReactNode;
  contents: React.ReactNode[];
  onNavigateClick?: (index: number) => void;
  buttonText?: string | undefined;
  className?: string | undefined;
}

const AppDialog: React.FC<IAppDialogProps> = (props) => {
  const { title, contents, onNavigateClick, buttonText, className } = props;
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => {
    setOpen(false);
    if (onNavigateClick) {
      setTimeout(() => onNavigateClick(0), 600);
    }
  };

  const intl = useIntl();
  const defaultText = intl.formatMessage({
    id: 'dialogs.defaultText',
    defaultMessage: 'Read Verses'
  });
  return (
    <React.Fragment>
      <button className="AppDialog-Button Law-Button" onClick={onOpen}>
        <PageText type={PageTextType.CONTENT}>
          { buttonText || defaultText }
        </PageText>
      </button>
      <Dialog
        className={`AppDialog${(className) ? (' ' + className) : ''}`}
        fullWidth={true}
        maxWidth={false}
        disableBackdropClick={true}
        open={open}
        onClose={onClose}
        aria-labelledby="app-dialog"
      >
        <DialogContent>
          <IconButton aria-label="close" className="AppDialog-CloseButton" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          { title }
          <Stepper className="AppDialog-Stepper" contents={contents} onNavigateClick={onNavigateClick} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AppDialog;