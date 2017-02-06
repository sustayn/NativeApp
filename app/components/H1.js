import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const H1 = ({ children, style = {}, ...props }) => {
  return (
    <Text style={StyleSheet.flatten([styles.h1, style])} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    color: '#666666',
    fontWeight: '600',
    fontSize: 24,
  }
});

export default H1;