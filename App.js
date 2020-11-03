import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
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
import Login from './src/views/Login';
import AppFormPicker from './src/components/forms/AppFormPicker';
import AppForm from './src/components/forms/AppForm';
import ListingEdit from './src/views/ListingEdit';
import Register from './src/views/Register';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import NetInfo from '@react-native-community/netinfo';

export default function App() {
  const netInfo = NetInfo.useNetInfo();
  console.log(netInfo);
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
