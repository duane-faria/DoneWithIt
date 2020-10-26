import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
