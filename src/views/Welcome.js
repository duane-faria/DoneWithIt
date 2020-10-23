import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import Logo from '../assets/logo-red.png';

function Welcome(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text>Venda o que você não precisa</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
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
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
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
});

export default Welcome;
