import axios from "axios";

const API_URL = "http://localhost:8080/api/transactions";

export const getTransactions = (accountNumber) =>
  axios.get(`${API_URL}/${accountNumber}`);

export const deposit = (accountNumber, amount) =>
  axios.post(`${API_URL}/deposit`, { account_number: accountNumber, amount });

export const withdraw = (accountNumber, amount) =>
  axios.post(`${API_URL}/withdraw`, { account_number: accountNumber, amount });
