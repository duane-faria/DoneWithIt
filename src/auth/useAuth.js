import React from 'react';

import AuthContext from './context';
import authStorage from '../auth/storage';
import JwtDecode from 'jwt-decode';

export default useAuth = () => {
  const { user, setUser } = React.useContext(AuthContext);

  const logIn = (token) => {
    const user = JwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
