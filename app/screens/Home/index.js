import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeviceShow from './DeviceShow';
import DeviceSetup from './DeviceSetup';
import DeviceNotFound from './DeviceNotFound';

import Container from '../partials/Container';
import { View, StyleSheet } from 'react-native';

const mapStateToProps = (state) => ({ device: state.device });

export class Home extends Component {
  static navigationOptions = {
    header: {
      title: 'Device Info',
    }
  }

  render() {
    const { isConfiguring, isConnected } = this.props.device;

    let deviceView = null;
    if(isConnected) {
      deviceView = isConfiguring ?
        <DeviceSetup /> :
        <DeviceShow navigation={this.props.navigation} />;
    } else {
      deviceView = <DeviceNotFound />;
    }

    return (
      <View style={{ flex: 1 }}>
        {deviceView}
      </View>
    )
  }
}

export default connect(mapStateToProps, () => ({}))(Home);