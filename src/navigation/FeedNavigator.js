import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Listing from '../views/Listing';
import ListingDetails from '../views/ListingDetails';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen name='Listings' component={Listing} />
    <Stack.Screen name='ListingDetails' component={ListingDetails} />
  </Stack.Navigator>
);
export default FeedNavigator;
