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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório').min(1),
  email: Yup.string().required('E-mail é obrigatório').min(1),
  password: Yup.string().required('Senha é obrigatória').min(1),
});

export default function Register() {
  const [error, setError] = React.useState(false);
  const authStore = useAuth();
  async function handleSubmit(values) {
    const response = await Auth.register(values);
    if (!response.ok) {
      setError(true);
      return;
    }

    const user = response.data;
    setError(false);
    const { data: token } = await Auth.login(user.email, user.password);
    authStore.logIn(token);
  }
  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <ErrorMessage error='Usuário ou senha já cadastrados' visible={error} />
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
  );
}

const styles = StyleSheet.create({});
