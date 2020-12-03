import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
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
            {
              (previousText) ? previousText:
              <FormattedMessage
                id="bottomNavigation.previous"
                defaultMessage="Previous" 
              />
            }
          </PageText>
        </Link>
      );
    }
    if (nextLink) {
      next = (
        <Link className="BottomNavigation-Next" to={nextLink}>
          <PageText type={PageTextType.CONTENT}>
            {
              (nextText) ? nextText:
              <FormattedMessage
                id="bottomNavigation.next"
                defaultMessage="Next" 
              />
            }
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