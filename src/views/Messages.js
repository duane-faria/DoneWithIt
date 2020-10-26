import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

let messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'T2',
    image: require('../assets/mosh.jpg'),
  },
];

function Messages() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default Messages;
