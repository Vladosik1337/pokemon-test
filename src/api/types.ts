import { AxiosError, AxiosResponse } from "axios";

export type BackendErrorInfo = {
  error: {
    code: string;
    message: string;
  };
};

export type AxiosResponseError = AxiosError<BackendErrorInfo>;

export type AxiosResponseSuccess<Data> = Promise<AxiosResponse<Data>>;

export type Pokemon = {
  name: string;
  url: string;
};

export type GetAllPokemonsData = {
  limit: string;
};

export type GetAllPokemonsResponse = {
  results: {
    name: string;
    url: string;
  }[];
};
