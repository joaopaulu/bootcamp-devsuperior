import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dscatalog-jp.herokuapp.com',
});
