import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import ArrowIcon from '../../icons/ArrowIcon';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';
import './Stepper.css';

export interface IAppStepperProps {
  contents: React.ReactNode[];
  onNavigateClick?: (step: number) => void;
  previousText?: string | undefined;
  nextText?: string | undefined;
  className?: string | undefined;
}

const AppStepper: React.FC<IAppStepperProps> = (props) => {
  const [step, setStep] = useState(0);
  const { contents, onNavigateClick, previousText, nextText, className } = props;
  const intl = useIntl();

  const defaultPreviousText = intl.formatMessage({
    id: "bottomNavigation.previous",
    defaultMessage: "Back"
  });
  
  const defaultNextText = intl.formatMessage({
    id: "bottomNavigation.next",
    defaultMessage: "Next"
  });

  const onPreviousClick = () => {
    const newStep = ((step - 1) >= 0) ? step - 1 : 0;
    setStep(newStep);
    if (onNavigateClick) onNavigateClick(newStep);
  };
  
  const onNextClick = () => {
    const newStep = (step + 1 <= contents.length - 1) ? step + 1 : 0;
    setStep(newStep);
    if (onNavigateClick) onNavigateClick(newStep);
  };

  return (
    <div className={`AppStepper${(className) ? (' ' + className) : ''}`}>
      <div className="AppStepper-Content">
        { contents[step] }
      </div>
      {
        (step <= 0) ? null:
        <PageText type={PageTextType.CONTENT}>
          <button className="AppStepper-Button AppStepper-Previous" onClick={onPreviousClick}>
            <ArrowIcon className="AppStepper-Arrow" />
            <span>{ previousText || defaultPreviousText }</span>
          </button>
        </PageText>
      }
      {
        (step >= (contents.length - 1)) ? null:
        <PageText type={PageTextType.CONTENT}>
          <button className="AppStepper-Button AppStepper-Next" onClick={onNextClick}>
            <span>{ nextText || defaultNextText }</span>
            <ArrowIcon className="AppStepper-Arrow" />
          </button>
        </PageText>
        
      }
    </div>
  );
};

export default AppStepper;