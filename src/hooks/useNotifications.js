import React from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushtokensApi from '../api/expoPushtoken';

const useNotification = (notificationListener) => {
  React.useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      let val = await expoPushtokensApi.register(token);
      if (!val.ok) console.log(val, 'expoPushtokensApi error');
      console.log('registerForPushNotifications chegou ao fim');
    } catch (error) {
      console.log(`error in getting token ${error}`);
    }
  };
};

export default useNotification;

// import { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

// import expoPushTokensApi from '../api/expoPushtoken';

// export default useNotifications = (notificationListener) => {
//   useEffect(() => {
//     registerForPushNotifications();

//     if (notificationListener)
//       Notifications.addNotificationReceivedListener(notificationListener);
//   }, []);

//   const registerForPushNotifications = async () => {
//     try {
//       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       if (!permission.granted) return;

//       const token = await Notifications.getExpoPushTokenAsync();
//       const tokenRes = await expoPushTokensApi.register(token);
//       if (tokenRes.ok == false) console.log(tokenRes);
//     } catch (error) {
//       console.log('Error getting a push token', error);
//     }
//   };
// };
