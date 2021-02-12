import { api, URL_USERS } from './api';

export const saveUser = async (username: string) => {
  const response = await api.post(`${URL_USERS}`, { username });

  return response;
};
