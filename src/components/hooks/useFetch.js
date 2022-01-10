import { useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Context } from '../../services/context';
import { urlBase } from '../../services/api';

export function useFetch(url, refresh) {
  const { token, group } = useContext(Context);
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await axios.get(urlBase + group + url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    { refreshInterval: refresh },
  );

  return { data, error, mutate };
}
