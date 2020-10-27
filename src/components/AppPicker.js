import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';

export default function AppPicker({ icon, placeholder, ...props }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      {/* <TextInput style={defaultStyles.text} {...props} /> */}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name={'chevron-down'}
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    height: 'auto',
    minWidth: '85%',
  },
});
