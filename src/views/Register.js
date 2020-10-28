import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SubmitButton from '../components/forms/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1),
  email: Yup.string().required().min(1),
  password: Yup.string().required().min(1),
});

export default function Register() {
  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
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
