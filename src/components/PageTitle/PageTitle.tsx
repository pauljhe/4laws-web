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
        { icon }
        <PageText type={type}>
          { children }
        </PageText>
      </div>
    );
  }
}

export default PageTitle;