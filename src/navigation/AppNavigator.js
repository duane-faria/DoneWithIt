import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEdit from '../views/ListingEdit';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEdit}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name='plus-circle'
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
        title: 'Conta',
      }}
    />
  </Tab.Navigator>
);
