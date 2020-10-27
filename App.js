import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
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
import Listing from './src/views/Listing';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';

export default function App() {
  const [firstName, setFirstName] = React.useState('');
  const [x, setX] = React.useState(false);

  return (
    <Screen>
      {/* <Switch value={x} onValueChange={(y) => setX(y)} />
      <AppTextInput placeholder='name' icon='email' /> */}
      <AppPicker placeholder='Categoria' icon='apps' />
      <AppTextInput placeholder='name' icon='email' />
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
