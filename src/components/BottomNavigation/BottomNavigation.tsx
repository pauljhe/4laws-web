import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../icons/ArrowIcon';
import { PageTextType } from '../../interfaces/page.interfaces';
import PageText from '../PageText';
import './BottomNavigation.css';

export interface IBottomNavigationProps {
  previousLink?: string | undefined;
  nextLink?: string | undefined;
  previousText?: string | undefined;
  nextText?: string | undefined;
}

class BottomNavigation extends React.Component<IBottomNavigationProps> {
  render() {
    const { previousLink, nextLink, previousText, nextText } = this.props;
    let previous;
    let next;
    if (previousLink) {
      previous = (
        <Link className="BottomNavigation-Previous" to={previousLink}>
          <PageText type={PageTextType.CONTENT}>
            <div className="BottomNavigation-Link-Wrapper">
              <ArrowIcon className="Previous-Arrow" />
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
    if (nextLink) {
      next = (
        <Link className="BottomNavigation-Next" to={nextLink}>
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
              <ArrowIcon className="Next-Arrow" />
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
  }
}

export default BottomNavigation;