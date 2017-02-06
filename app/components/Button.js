import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'native-base';

export const StyledButton = ({ children, ...props }) => (
  <Button style={styles.button} {...props}>
    {children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    shadowColor: undefined,
    shadowOpacity: undefined,
    shadowOffset: undefined,
    shadowRadius: undefined,
  }
});

export default StyledButton;