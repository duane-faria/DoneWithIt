import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import Screen from './src/components/Screen';
import ListingDetails from './src/views/ListingDetails';
import ViewImage from './src/views/ViewImage';
import Welcome from './src/views/Welcome';
import Messages from './src/views/Messages';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import Account from './src/views/Account';
import Listing from './src/views/Listing';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';
import Login from './src/views/Login';
import AppFormPicker from './src/components/forms/AppFormPicker';
import AppForm from './src/components/forms/AppForm';
import ListingEdit from './src/views/ListingEdit';
import Register from './src/views/Register';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [imageUri, setImageUri] = React.useState();

  const requestPermission = async () => {
    const res = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    if (res.granted) alert('ok');
    else alert('libera la');
    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync;
    // if (!granted) alert('você precisa habilitar o uso da câmera');
  };

  React.useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (e) {}
  };

  return (
    <Screen>
      <Button title='Selecione uma imagem' onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
