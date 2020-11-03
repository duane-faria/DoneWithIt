import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';

import colors from '../config/colors';
import Text from './AppText';

export default function OfflineNotice(props) {
  const netInfo = NetInfo.useNetInfo();

  if (netInfo.type != 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sem internet :/</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    top: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});
