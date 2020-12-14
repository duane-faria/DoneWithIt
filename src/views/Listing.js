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
import useApi from '../hooks/useApi';

export default function Listing({ navigation, route }) {
  const flatlist = React.useRef();
  const userId = route.params?.user;
  let func;
  console.log(userId)
  if(userId){
       func =  () => listingsApi.getListingsByUser(userId);
  }else{
    func =  listingsApi.getListings;
  }
    const { data: listings, error, loading, request: loadListings } = useApi(
        func
        );
  const [refreshing,setRefreshing] = React.useState(false);

  React.useEffect(() => {
    // if(userId){
    //     getListingsByUser(userId);
    // }else{
    // }
    loadListings();

    flatlist.current.scrollToEnd();

    () => loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Alguma coisa deu errado, tente novamente.</AppText>
            <AppButton title='Ok' onPress={loadListings} />
          </>
        )}
        {listings && (
          <FlatList
            refreshing={refreshing}
            onRefresh={()=>loadListings()}
            ref={flatlist}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15 }}
            data={listings}
            keyExtractor={(list) => list.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={'R$ ' + item.price}
                imageUrl={item.images[0].url}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    flex: 1,
  },
});
