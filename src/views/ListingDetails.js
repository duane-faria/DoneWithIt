import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetails() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket a venda</AppText>
        <AppText style={styles.price}>R$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title='Mosh Hamedani'
          subTitle='5 itens'
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
