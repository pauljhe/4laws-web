import React from 'react';
import PageText, { IPageTextProps } from '../PageText/PageText';
import './PageTitle.css';

export interface IPageTitleProps extends IPageTextProps {
  icon: React.ReactNode;
  minimized?: boolean;
}

class PageTitle extends React.Component<IPageTitleProps> {
  getClassNames(): string {
    const { minimized, className } = this.props;
    let classNames = 'PageTitle';
    if (minimized) classNames += ' PageTitle-Minimized';
    if (className) classNames += ' ' + className;
    return classNames;
  }
  
  render() {
    const { icon, type, children } = this.props;
    return (
      <div className={this.getClassNames()}>
        <div className="PageTitle-Wrapper">
          { icon }
          <PageText type={type} className="PageTitle-PageText">
            { children }
          </PageText>
        </div>
      </div>
    );
  }
}

export default PageTitle;