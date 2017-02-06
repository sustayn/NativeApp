import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureDevice } from '../../actions';

import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { H3, Button } from '../../components';

const mapStateToProps = (state) => ({ device: state.device });
const mapDispatchToProps = (dispatch) => bindActionCreators({ configureDevice }, dispatch);

export class DeviceShow extends Component {
  constructor(props) {
    super(props);

    const { name = '', ssid = '' } = this.props.device;
    this.state = { name, ssid };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.labelWrapper}>
          <View style={styles.labelContainer}>
            <Icon name='ios-finger-print' style={styles.icon} />
            <View>
              <H3 style={styles.label}>Device Name</H3>
              <Text>{this.state.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <View style={styles.labelContainer}>
            <Icon name='ios-wifi' style={styles.icon} />
            <View>
              <H3 style={styles.label}>WiFi Name</H3>
              <Text>{this.state.ssid}</Text>
            </View>
          </View>
        </View>
        <Button style={styles.button} block onPress={this._goToConfig.bind(this)}>Edit Settings</Button>
      </View>
    )
  }

  _goToConfig() {
    if(this.props.navigation) this.props.navigation.navigate('Setup');
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelWrapper: {
    height: 80,
    paddingTop: 20,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: '#666',
    paddingRight: 10,
  },
  label: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  button: {
    marginTop: 20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceShow);