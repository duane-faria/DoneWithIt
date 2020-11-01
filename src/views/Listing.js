import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';

// const listings = [
//   {
//     id: 1,
//     title: 'red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title: 'couch in excelent conditions',
//     price: 1000,
//     image: require('../assets/couch.jpg'),
//   },
// ];

export default function Listing({ navigation }) {
  const [listings, setListings] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setListings(response.data);
    setError(false);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Alguma coisa deu errado, tente novamente.</AppText>
          <AppButton title='Ok' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        style={{ marginTop: 15 }}
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'R$ ' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    flex: 1,
  },
});
