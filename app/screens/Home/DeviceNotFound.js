import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import { H3 } from '../../components';

export class DeviceConfig extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <H3 style={styles.info}>There was an issue finding the device on its network. Make sure you are on the device's WiFi network.</H3>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  info: {
    textAlign: 'center',
    lineHeight: 24,
  }
});

export default DeviceConfig;