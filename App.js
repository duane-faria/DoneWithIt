import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import ViewImage from './src/views/ViewImage';
import Welcome from './src/views/Welcome';

export default function App() {
  return (
    <View
      style={[{ backgroundColor: '#f8f4f4', padding: 20 }, styles.container]}
    >
      <Card
        title='Red jacket for sale'
        subTitle='R$100'
        image={require('./src/assets/jacket.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
