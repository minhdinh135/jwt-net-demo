import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    return localStorage.getItem('token');
  };

  const [token, setToken] = useState(getToken());
  

  const saveToken = userToken => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const reloadToken = () => {
    setToken(getToken());
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return {
    removeToken: removeToken,
    setToken: saveToken,
    reloadToken: reloadToken,
    token
  }
}
