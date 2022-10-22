import axios from "axios";

import md5 from "md5";

const publicKey: string = import.meta.env.VITE_PUBLIC_KEY_API;

const privateKey: string = import.meta.env.VITE_PRIVATE_KEY_API;

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/`,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
