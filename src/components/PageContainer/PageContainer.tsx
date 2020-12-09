import Container from '@material-ui/core/Container';
import React from 'react';
import './PageContainer.css';

class PageContainer extends React.Component {
  render() {
    return (
      <Container className="PageContainer" maxWidth={false}>
        <div className="PageContainer-Wrapper">
          { this.props.children }
        </div>
      </Container>
    );
  }
}

export default PageContainer;
