import React, { Component } from 'react';

import { Container, Content } from 'native-base';
import theme from '../../styles/theme';

export class ScreenContainer extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <Container theme={theme} {...props}>
        <Content>
          {children}
        </Content>
      </Container>
    );
  }
}

export default ScreenContainer;