import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Listing from '../views/Listing';
import ListingDetails from '../views/ListingDetails';
import colors from '../config/colors';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen
      name='Listings'
      component={Listing}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='ListingDetails'
      component={ListingDetails}
      options={{
        title: '',
        headerTransparent: true,
        headerTintColor: colors.primary,
      }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
