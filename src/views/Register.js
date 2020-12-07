import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SubmitButton from '../components/forms/SubmitButton';
import Auth from '../api/auth';
import ErrorMessage from '../components/forms/ErrorMessage';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';
import settings from '../config/settings';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório').min(1),
  email: Yup.string().required('E-mail é obrigatório').min(1),
  password: Yup.string().required('Senha é obrigatória').min(1),
});

export default function Register() {
  const registerApi = useApi(Auth.register);
  const loginApi = useApi(Auth.login);
  const [error, setError] = React.useState(false);
  const authStore = useAuth();

  function handleSubmit(values) {
    // console.log(values);
    // return;
    // const response = await registerApi.request(values);
    // if (!response.ok) {
    //   setError(true);
    //   return;
    // }

    // const user = response.data;
    // setError(false);
    // const { data: token } = await loginApi.request(user.email, user.password);
    // console.log(token, 'token');
    // authStore.logIn(token.token);

    fetch(`${settings.apiUrl}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        console.log(response, 'retorno');
        if (!response.user) {
          setError(true);
          return;
        }
        const user = response.user;

        setError(false);
        loginApi
          .request(user.email, values.password)
          .then(({ data: token }) => {
            console.log(token, 'token');
            authStore.logIn(token.token);
          });
      });
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={{ paddingHorizontal: 10 }}>
        <AppForm
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error='Usuário ou senha já cadastrados'
            visible={error}
          />
          <AppFormField
            name='name'
            icon='account'
            placeholder='Nome'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <AppFormField
            name='email'
            icon='email'
            placeholder='E-mail'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='numeric'
          />
          <AppFormField
            secureTextEntry
            name='password'
            icon='lock'
            placeholder='Senha'
            autoCapitalize='none'
          />
          <SubmitButton title='Cadastrar' />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});
