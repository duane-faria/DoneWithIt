import React from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = React.useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      console.log(granted);
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return location;
};
