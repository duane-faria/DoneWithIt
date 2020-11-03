import AsyncStorage from '@react-native-community/async-storage';
import { getTime, differenceInMinutes } from 'date-fns';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpired = (item) => {
  const now = getTime(Date.now());
  const storedTime = getTime(item.timestamp);
  const isExpired = differenceInMinutes(storedTime, now) > 5;
  return isExpired;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default {
  store,
  get,
};
