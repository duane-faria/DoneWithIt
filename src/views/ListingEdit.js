import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import SubmitButton from '../components/forms/SubmitButton';
import ImageInput from '../components/ImageInput';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import useLocation from '../hooks/useLocation';
import listingApi from '../api/listings';
import Upload from './Upload';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('campo obrigatório').min(1).label('Título'),
  price: Yup.number()
    .required('campo obrigatório')
    .min(1)
    .max(10000)
    .label('Preço'),
  description: Yup.string().label('Descrição'),
  category: Yup.object()
    .required('campo obrigatório')
    .nullable()
    .label('Category'),
  images: Yup.array().min(1, 'Por favor selecione ao menos uma imagem.'),
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
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  async function handleSubmit(listing, { resetForm }) {
    setProgress(0);
    setUploadVisible(true);
    const res = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!res.ok) alert('Algo deu errado D:');

    resetForm();
  }

  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <Upload
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
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
