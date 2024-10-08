import axios, { AxiosInstance } from 'axios';

const baseUrl = process.env.BASE_API_URL;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});