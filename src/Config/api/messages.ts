import moment from 'moment';
import { api, URL_MESSAGES } from './api';

export const saveMessage = async (username: string, userMessage: string) => {
  const response = await api.post(`${URL_MESSAGES}`, {
    username,
    userMessage,
    date: moment().format('DD/MM/YYYY hh:mm:ss').toString(),
  });

  return response;
};

export const getMessages = async () => {
  const response = await api.get(`${URL_MESSAGES}`);

  return response;
};
