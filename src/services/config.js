import axios from 'axios';

export const api = axios.create({

  baseURL: 'https://contas-a-pagar-java.herokuapp.com/v1'
})