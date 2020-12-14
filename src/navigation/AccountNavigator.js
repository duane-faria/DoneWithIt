import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../views/Account';
import Feed from '../views/Listing';
import Messages from '../views/Messages';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen
      name='Account'
      component={Account}
      options={{ title: 'Minha conta' }}
    />
    <Stack.Screen
      name='Messages'
      component={Messages}
      options={{ title: 'Mensagens' }}
    />
    <Stack.Screen
      name='UserFeed'
      component={Feed}
      options={({route:{params}}) => ({ title: params.title })}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
