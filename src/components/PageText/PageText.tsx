import React from 'react';
import { PageTextType } from '../../interfaces/page.interfaces';
import './PageText.css';

export interface IPageTextProps {
  type: PageTextType;
  className?: string | undefined;
}

class PageText extends React.Component<IPageTextProps> {

  getClassNames(): string {
    const { type, className } = this.props;
    let classNames =  'PageText ';
    switch(type) {
      case PageTextType.TITLE:
        classNames += 'PageText-Title';
        break;
      // case PageTextType.SUBTITLE:
      //   classNames += 'PageText-Subtitle';
      //   break;
      case PageTextType.CONTENT:
        classNames += 'PageText-Content';
        break;
    }
    if (className) classNames += ' ' + className;
    return classNames;
  }

  render() {
    return (
      <span className={this.getClassNames()}>{ this.props.children }</span>
    );
  }
}

export default PageText;