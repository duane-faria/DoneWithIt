import client from './client';

const register = (pushToken) => {
  console.log(pushToken, 'register expoPushToken api');
  return client.post('/expoPushTokens', { token: pushToken });
};

export default {
  register,
};
