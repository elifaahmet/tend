import axios from 'axios';
import qs from 'querystring';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
});

export type Response<TResult> = {
  result?: TResult;
  isSuccess: boolean;
  error?: { message: string };
};

export function get<TResult>(path: string) {
  return axiosInstance.get(path).then((res) => {
    const data: TResult = res.data;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const response = <Response<TResult>>{
      isSuccess: res.status >= 200 && res.status < 300,
      result: data,
    };
    return response;
  });
}

export function post<TResult>(path: string, data: unknown, type: 'json' | 'formData') {
  const requestData = type === 'json' ? data : qs.stringify(data as qs.ParsedUrlQueryInput);
  return axiosInstance
    .post(path, requestData, {
      headers: {
        'Content-Type': type === 'json' ? 'application/json' : 'application/x-www-form-urlencoded',
      },
    })
    .then((res) => {
      const data: TResult = res.data;
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const response = <Response<TResult>>{
        isSuccess: res.status >= 200 && res.status < 300,
        result: data,
      };
      return response;
    });
}

export default axiosInstance;
