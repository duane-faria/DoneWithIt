import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './src/components/AppButton';
import ViewImage from './src/views/ViewImage';
import Welcome from './src/views/Welcome';

export default function App() {
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
