// нам нужно зделать так чтобы мы делали запрос через аксиос
import axios from 'axios';

// создаем экземпляр для нашего аксиоса
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
