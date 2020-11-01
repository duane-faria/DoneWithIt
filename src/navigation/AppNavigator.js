import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from '../views/Account';
import ListingEdit from '../views/ListingEdit';
import Listing from '../views/Listing';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEdit} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
);
