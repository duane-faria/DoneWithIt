import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import authApi from '../api/auth';
import ErrorMessage from '../components/forms/ErrorMessage';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function Login() {
  const [loginFailed, setLoginFailed] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  async function handleSubmit(loginInfo) {
    const { email, password } = loginInfo;
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    const token = result.data;
    const user = jwtDecode(token);

    authContext.setUser(user);
    authStorage.storeToken(token);
  }

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='E-mail ou senha incorretos'
          visible={loginFailed}
        />
        <AppFormField
          icon='email'
          name='email'
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
          KeyboardType='email-address'
          textContentType='emailAddress'
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
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
