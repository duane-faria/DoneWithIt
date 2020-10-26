import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import ListingDetails from './src/views/ListingDetails';
import ViewImage from './src/views/ViewImage';
import Welcome from './src/views/Welcome';
import Messages from './src/views/Messages';

export default function App() {
  return <Messages />;
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
