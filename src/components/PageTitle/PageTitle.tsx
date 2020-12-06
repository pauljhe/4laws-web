import React from 'react';
import PageText, { IPageTextProps } from '../PageText/PageText';
import './PageTitle.css';

export interface IPageTitleProps extends IPageTextProps {
  icon: React.ReactNode;
  minimized?: boolean;
}

class PageTitle extends React.Component<IPageTitleProps> {
  render() {
    const { icon, type, className, minimized, children } = this.props;
    return (
      <div className={`PageTitle${(minimized) ? ' PageTitle-Minimized' : ''}`}>
        { icon }
        <PageText type={type} className={className}>
          { children }
        </PageText>
      </div>
    );
  }
}

export default PageTitle;