import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEdit from '../views/ListingEdit';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEdit} />
    <Tab.Screen name='Account' component={AccountNavigator} />
  </Tab.Navigator>
);
