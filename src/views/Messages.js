import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

function Messages() {
  const [messages, setMessage] = React.useState([
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/duane.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'T2',
      image: require('../assets/duane.jpg'),
    },
  ]);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id != message.id));
  };

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
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 3,
              title: 'T3',
              description: 'T3',
              image: require('../assets/duane.jpg'),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default Messages;
