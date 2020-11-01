import clinte from './client';

const endpoint = '/listings';

const getListings = () => clinte.get(endpoint);

export default {
  getListings,
};
