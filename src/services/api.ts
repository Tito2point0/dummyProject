// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.pokemontcg.io/v2';

export const fetchCards = async (query: string, page: number, pageSize: number) => {
  const response = await axios.get(`${API_BASE_URL}/cards`, {
    params: {
      q: query,
      page,
      pageSize,
    },
  });
  return response.data;
};
