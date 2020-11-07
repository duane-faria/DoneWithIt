import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import MessageSeller from '../components/MessageSeller';
import colors from '../config/colors';

export default function ListingDetails({ route }) {
  const listing = route.params;
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        style={styles.container}
      >
        <Image style={styles.image} uri={listing.images[0].url} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{'R$ ' + listing.price}</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/duane.jpg')}
            title='Duane Faria'
            subTitle='5 itens'
          />
        </View>
        <View style={styles.messageContainer}>
          <MessageSeller listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 10,
  },
  messageContainer: {
    paddingHorizontal: 15,
  },
});
