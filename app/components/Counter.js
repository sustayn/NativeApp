import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions';

import { View, Text } from 'react-native';
import Button from './Button';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ increment, decrement }, dispatch);
};

class Counter extends Component {
  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.increment();
    }
  }

  incrementAsync() {
    setTimeout(this.props.increment, 100);
  }

  render() {
    const { value, increment, decrement } = this.props;
    return (
      <View>
        <Text>Clicked: {value} times</Text>
        <Text>{' '}</Text>
        <Button onPress={increment} block>+</Button>
        <Text>{' '}</Text>
        <Button onPress={decrement} block>-</Button>
        <Text>{' '}</Text>
        <Button onPress={::this.incrementIfOdd} block>Increment if odd</Button>
        <Text>{' '}</Text>
        <Button onPress={::this.incrementAsync} block>Increment async</Button>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);