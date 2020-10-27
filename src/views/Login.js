import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

export default function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppTextInput
        icon='email'
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        KeyboardType='email-address'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        textContentType='password'
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
