import React from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setData(response.data);
    setError(false);
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
