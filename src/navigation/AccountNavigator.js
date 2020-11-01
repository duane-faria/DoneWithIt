import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../views/Account';
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
  </Stack.Navigator>
);

export default AccountNavigator;
