import React from 'react';
import { Alert, View, StyleSheet, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { Notifications } from 'expo';

import AppForm from './forms/AppForm';
import AppFormField from './forms/AppFormField';
import SubmitButton from './forms/SubmitButton';
import messagesApi from '../api/messages';

const validationSchema = Yup.object().shape({
  message: Yup.string().required(),
});

export default function MessageSeller({ listing }) {
  async function handleSubmit(form, { resetForm }) {
    const res = await messagesApi.send(form.message, listing.id);
    if (res && !res.ok) {
      Alert.alert('Atenção', 'Algo de errado ocorreu, tente novamente.');
    }

    resetForm();

    Keyboard.dismiss();
    Notifications.presentLocalNotificationAsync({
      title: 'Incrível!',
      body: 'Sua mensagem foi enviada',
      body: {
        _displayInForeground: true,
      },
    });
  }

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField name='message' placeholder='Mensagem...' />
        <SubmitButton title='Contate o vendedor' style={{ marginTop: -10 }} />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
