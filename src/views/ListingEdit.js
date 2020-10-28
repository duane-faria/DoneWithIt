import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import SubmitButton from '../components/forms/SubmitButton';

import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Título'),
  price: Yup.number().required().min(1).max(10000).label('Preço'),
  description: Yup.string().label('Descrição'),
});

const categories = [
  {
    value: 1,
    label: 'Móvies',
  },
  {
    value: 2,
    label: 'Roupas',
  },
  {
    value: 3,
    label: 'Eletrônicos',
  },
];

export default function ListingEdit() {
  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='title'
          placeholder='Título'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <AppFormField
          name='price'
          placeholder='Preço'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
        />
        <AppFormPicker
          items={categories}
          placeholder='Categorias'
          name='category'
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          placeholder='Descrição'
          autoCapitalize='none'
          numberOfLines={3}
        />
        <SubmitButton title='Salvar' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
