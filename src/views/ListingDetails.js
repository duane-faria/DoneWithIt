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
import useAuth from '../auth/useAuth';

export default function ListingDetails({ route, navigation }) {
  const listing = route.params;
  const { user: userAuthenticated } = useAuth();

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
          <AppText style={styles.description}>{listing.description}</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={{uri:listing.user.avatar}}
            title={listing.user.name}
            subTitle={listing.user?.totalAds > 1 ? listing.user.totalAds + ' items' : listing.user.totalAds + ' item'}
            onPress={() => userAuthenticated.id == listing.user._id ? navigation.navigate('UserFeed',{ title:`Meus anúncios`, user: listing.user._id }) : navigation.navigate('UserFeed',{ title:`Anúncions de ${listing.user.name}`, user: listing.user._id })}
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
  description:{
    fontSize: 18,
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 10,
  },
  messageContainer: {
    paddingHorizontal: 15,
  },
});
