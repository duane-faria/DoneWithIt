import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import Register from '../views/Register';
import Welcome from '../views/Welcome';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Welcome'
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>
);

export default AuthNavigator;
