import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';
import OfflineNotice from './src/components/OfflineNotice';
import { View } from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AuthContext from './src/auth/context';

export default function App() {
  const [user, setUser] = React.useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
