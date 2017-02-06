import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from "react-redux";

import Navigator from './Navigator';
import Splash from './screens/Splash';
import Ajax from './services/Ajax';
import { a } from './actions';

import { configureStore } from "./store";
const store = configureStore();

import './styles/global-styles';

// if(process.env.NODE_ENV === 'development') require('../mirage/index');

@connect((state) => ({ nav: state.nav }))
class AppWithNavigation extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state:    this.props.nav,
      })} />
    );
  }
}

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    Ajax.fetch('http://192.168.4.1/config', { timeout: 5000 })
    .then(({ json }) => {
      store.dispatch({ type: a.FETCH_CONFIG_RES, payload: json });
    })
    .catch((err) => {
      if(err.timeout) {
        store.dispatch({ type: a.FETCH_CONFIG_TIMEOUT });
      } else {
        store.dispatch({ type: a.FETCH_CONFIG_RES, payload: {} })
      }
    })
    .finally(() => {
      this.setState({ loaded: true });
    });
  }

  render() {
    const view = this.state.loaded ? <AppWithNavigation /> : <Splash />;
    return (
      <Provider store={store}>
        {view}
      </Provider>
    );
  }
}

export default AppRegistry.registerComponent('NativeApp', () => AppWrapper);