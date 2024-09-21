import axios from "axios";

import { getSessionStorageItem } from "./storage";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async (options) => {
  const session_id = getSessionStorageItem({ key: "__session" });
  client.defaults.headers.common.Authorization = `Bearer ${session_id}`;

  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    // eslint-disable-next-line no-undef
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
