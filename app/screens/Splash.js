import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet
} from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <StatusBar hidden={true} />
        <Image style={styles.image} source={require('../assets/splash-image.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
});

export default Splash;