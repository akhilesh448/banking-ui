import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/accounts';

export const getAllAccounts = () => axios.get(BASE_URL);
export const getAccount = (accountNumber) => axios.get(`${BASE_URL}/${accountNumber}`);
export const createAccount = (account) => axios.post(`${BASE_URL}/new`, account);
export const deleteAccount = (accountNumber) => axios.delete(`${BASE_URL}/${accountNumber}/delete`);
