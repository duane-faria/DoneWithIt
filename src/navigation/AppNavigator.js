// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

// import ListingEdit from '../views/ListingEdit';
// import FeedNavigator from './FeedNavigator';
// import AccountNavigator from './AccountNavigator';
// import NewListingButton from './NewListingButton';
// import expoPushtokensApi from '../api/expoPushtoken';
// import navigation from './rootNavigation';

// const Tab = createBottomTabNavigator();

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

// const AppNavigator = () => {
//   React.useEffect(() => {
//     registerForPushNotifications();
//     // This listener is fired whenever a notification is received while the app is foregrounded
//     Notifications.addNotificationReceivedListener((notification) => {
//       console.log(notification);
//     });

//     // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
//     Notifications.addNotificationResponseReceivedListener((response) => {
//       console.log(response);
//     });
//   }, []);
//   const registerForPushNotifications = async () => {
//     try {
//       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       if (!permission.granted) return;
//       const { data: token } = await Notifications.getExpoPushTokenAsync();
//       let val = await expoPushtokensApi.register(token);
//       if (!val.ok) console.log(val);
//     } catch (error) {
//       console.log(`error in getting token ${error}`);
//     }
//   };

//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name='Feed'
//         component={FeedNavigator}
//         options={{
//           tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons name='home' size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name='ListingEdit'
//         component={ListingEdit}
//         options={({ navigation }) => ({
//           tabBarButton: () => (
//             <NewListingButton
//               onPress={() => navigation.navigate('ListingEdit')}
//             />
//           ),
//           tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons
//               name='plus-circle'
//               size={size}
//               color={color}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name='Account'
//         component={AccountNavigator}
//         options={{
//           tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons name='account' size={size} color={color} />
//           ),
//           title: 'Conta',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// export default AppNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../views/ListingEdit';
import NewListingButton from './NewListingButton';
import routes from './routes';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications(() => console.log('chama'));

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-circle'
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
