import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useVillager = (searchOption: SearchOptions) => {
  const url = '/api/villager';
  const fetchList = (): Promise<AxiosResponse<ResponseData<Villager[]>>> => {
    return axios.get(url, {
      params: searchOption,
    });
  };

  const {
    isLoading,
    isError,
    data: res,
    error,
  } = useQuery<AxiosResponse<ResponseData<Villager[]>>, AxiosError<ResponseError>>(['villagerList', searchOption], () => fetchList(), {
    refetchOnWindowFocus: false,
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.warn('호출 실패');
      console.error(e);
    },
  });

  const data = res?.data;
  let msg;

  if (error) {
    msg = error.response?.data.msg;
  }

  return { isLoading, isError, data, error, msg };
};

export default useVillager;
