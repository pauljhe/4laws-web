import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../icons/ArrowIcon';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';
import './BottomNavigation.css';

export interface IBottomNavigationProps {
  previousTo?: string | undefined;
  nextTo?: string | undefined;
  previousText?: string | undefined;
  nextText?: string | undefined;
  hideArrow?: boolean;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

const BottomNavigation: React.FC<IBottomNavigationProps> = (props) => {
  const { previousTo, nextTo, previousText, nextText, hideArrow, onPreviousClick, onNextClick } = props;
  const intl = useIntl();
  const includeLocale = (link: string) => `/${intl.locale}${link}`;

  let previous;
  let next;
  if (previousTo) {
    previous = (
      <Link 
        className="BottomNavigation BottomNavigation-Previous" 
        to={includeLocale(previousTo)}
        onClick={onPreviousClick}
      >
        <PageText type={PageTextType.CONTENT}>
          <div className="BottomNavigation-Link-Wrapper">
            {
              (hideArrow) ? null:
              <ArrowIcon className="Previous-Arrow" />
            }
            <span>
              {
                (previousText) ? previousText:
                <FormattedMessage
                  id="bottomNavigation.previous"
                  defaultMessage="Back" 
                />
              }
            </span>
          </div>
        </PageText>
      </Link>
    );
  }
  if (nextTo) {
    next = (
      <Link 
        className="BottomNavigation BottomNavigation-Next" 
        to={includeLocale(nextTo)}
        onClick={onNextClick}
      >
        <PageText type={PageTextType.CONTENT}>
          <div className="BottomNavigation-Link-Wrapper">
            <span>
              {
                (nextText) ? nextText:
                <FormattedMessage
                  id="bottomNavigation.next"
                  defaultMessage="Next" 
                />
              }
            </span>
            {
              (hideArrow) ? null:
              <ArrowIcon className="Next-Arrow" />
            }
          </div>
        </PageText>
      </Link>
    );
  }
  return (
    <React.Fragment>
      {previous}
      {next}
    </React.Fragment>
  );
};

// class BottomNavigation extends React.Component<IBottomNavigationProps> {
//   render() {
    
//   }
// }

export default BottomNavigation;