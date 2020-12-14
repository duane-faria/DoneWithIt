import { useFormikContext } from "formik";
import React from "react";
import { Image, TouchableWithoutFeedback, Text,View} from "react-native";
import * as ImagePicker from 'expo-image-picker';

import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";
import Icon from "../Icon";

function FormAvatarPicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const avatar = values[name];

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log(result)
      if (!result.cancelled) setFieldValue(name,result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <View style={{display:'flex',alignItems:'center' }}>
    <View style={{width:90,height:90,borderRadius:45,backgroundColor:'tomato',alignSelf:'center',position:'relative',overflow:'hidden'}}>
        <TouchableWithoutFeedback onPress={() => selectImage()}>
            <View style={{position:'absolute', bottom:0,left:'29%'}}>
                <Icon name="image-plus" backgroundColor="transparent"/>
            </View>
        </TouchableWithoutFeedback>
     {avatar.length > 0 && <Image source={{uri:avatar}} style={{zIndex:-1,width:90,height:90, position:'absolute', top:0, left:0,right:0,bottom:0}}/>}
    </View>
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormAvatarPicker;
