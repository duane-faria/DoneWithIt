import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import Logo from '../assets/logo-red.png';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.tagLine}>Venda o que você não precisa</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate('Login')} />
        <AppButton
          title='Cadastrar'
          color='secondary'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    height: 64,
    width: 64,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default Welcome;
