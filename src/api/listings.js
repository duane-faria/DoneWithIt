import client from './client';

const endpoint = '/ads';

const getListings = () => client.get(endpoint);

const getListingsByUser = (userId) => client.get(`${endpoint}/user/${userId}`);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append('title', listing.title);
  data.append('user', listing.user);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) => {
    data.append('files', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    });
  });

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
  getListingsByUser
};
