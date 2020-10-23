import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './Teste';

export default function App() {
  let x = 1;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O expo está rodando no meu cel também</Text>
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
