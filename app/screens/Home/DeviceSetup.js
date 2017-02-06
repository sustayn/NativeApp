import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitConfig, configureDevice } from '../../actions';

import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, InputGroup, Input, Icon } from 'native-base';
import { H3, Button } from '../../components';

const mapStateToProps = (state) => ({ device: state.device });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ submitConfig, configureDevice }, dispatch);

export class DeviceSetup extends Component {
  constructor(props) {
    super(props);

    const { name = '', ssid = '' } = this.props.device;
    this.state = { name, ssid, pass: '' };
  }

  render() {
    const cancelButton = this.props.navigation ? (
      <Button style={styles.cancelBttn} bordered block onPress={this._cancel.bind(this)}>Cancel</Button>
    ) : null;

    return (
      <View style={styles.wrapper}>
        <View>
          <H3 style={styles.header}>Enter Device Configuration</H3>
          <InputGroup style={styles.inputGroup} borderType='underline'>
            <Icon name='ios-finger-print' />
            <Input
              style={styles.nameInput}
              placeholder='Device Name'
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
            />
          </InputGroup>
          <InputGroup style={styles.inputGroup} borderType='underline'>
            <Icon name='ios-wifi' />
            <Input
            style={styles.ssidInput}
              placeholder='WiFi Name'
              value={this.state.ssid}
              onChangeText={(ssid) => this.setState({ ssid })}
            />
          </InputGroup>
          <InputGroup style={styles.inputGroup} borderType='underline'>
            <Icon name='ios-unlock' />
            <Input
              style={styles.passInput}
              placeholder='WiFi Password'
              value={this.state.pass}
              secureTextEntry={true}
              onChangeText={(pass) => this.setState({ pass })}
            />
          </InputGroup>
        </View>
        <View style={styles.bttnContainer}>
          <Button style={styles.submitBttn} block onPress={this._submit.bind(this)}>Submit</Button>
          {cancelButton}
        </View>
      </View>
    )
  }

  _submit() {
    const { name, ssid, pass } = this.state;
    this.props.submitConfig({ name, ssid, pass });
  }

  _cancel() {
    if(this.props.navigation) this.props.navigation.goBack();
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  nameInput: {
    paddingLeft: 8,
  },
  passInput: {
    paddingLeft: 13,
  },
  bttnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  submitBttn: {
    flex: 1,
  },
  cancelBttn: {
    flex: 1,
    marginLeft: 20,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceSetup);