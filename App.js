import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import Screen from './src/components/Screen';
import ListingDetails from './src/views/ListingDetails';
import ViewImage from './src/views/ViewImage';
import Welcome from './src/views/Welcome';
import Messages from './src/views/Messages';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import Account from './src/views/Account';

export default function App() {
  return (
    <Screen>
      {/* <ListItem title='Lista' ImageComponent={<Icon name='email' />} /> */}
      <Account />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
