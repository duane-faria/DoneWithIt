import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import Screen from '../components/Screen';
import colors from '../config/colors';
const menuItems = [
  {
    title: 'Minhas listas',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'Minhas mensagens',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];
export default function Account({ navigation }) {
  const { user, setUser } = React.useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/duane.jpg')}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Sair'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  screen: {
    marginVertical: 20,
  },
});
