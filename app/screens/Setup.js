import React, { Component } from 'react';

import Container from './partials/Container';
import DeviceSetup from './Home/DeviceSetup';

export class Setup extends Component {
  static navigationOptions = {
    header: {
      title: 'Edit Config',
    }
  }

  render() {
    return (
      <DeviceSetup navigation={this.props.navigation} />
    )
  }
}

export default Setup;