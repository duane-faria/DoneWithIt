import Constants from 'expo-constants';
const settings = {
  dev: {
    // apiUrl: 'http://192.168.1.8:9000/api',
    apiUrl: 'http://192.168.1.6:3000',
  },
  staging: {
    apiUrl: '',
  },
  prod: {
    apiUrl: '',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  else return settings.prod;
};

export default getCurrentSettings();
