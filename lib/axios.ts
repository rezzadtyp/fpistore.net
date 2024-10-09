import axios, { AxiosInstance } from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});