import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 80 / 2,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: 35,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
