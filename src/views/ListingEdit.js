import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
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
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Móveis',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Carros',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Câmeras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Roupas',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Esportes',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Cinema e música',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Livros',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Outros',
    value: 9,
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
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
