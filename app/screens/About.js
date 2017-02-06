import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../components/Button';
import Counter from '../components/Counter';
import Container from './partials/Container';

class About extends React.Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Button onPress={this._goBackHome}>Go Back</Button>

        <Counter />
      </Container>
    );
  }

  _goBackHome = () => {
    this.props.navigation.goBack();
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

export default About;