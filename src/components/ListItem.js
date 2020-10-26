import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.listDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  listDetails: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});
