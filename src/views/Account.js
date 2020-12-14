import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

export default function Account({ navigation }) {
    const { user, logOut } = useAuth();

    const menuItems = [
        {
        title: 'Minhas listas',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
        targetScreen: 'UserFeed',
        params: {
            title:'Meus anúncios',
            user:user.id
        }
        },
        {
        title: 'Minhas mensagens',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        targetScreen: 'Messages',
        params: {}
        },
    ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={{uri:user.avatar}}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen,item.params)}
            />
          )}
        />
      </View>
      <ListItem
        title='Sair'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  screen: {
    paddingTop: -5,
  },
});
