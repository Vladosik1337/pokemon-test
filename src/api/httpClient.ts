import axios, { AxiosRequestConfig } from "axios";
import { AxiosResponseSuccess } from ".";

function createHttpClient() {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2",
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig
): AxiosResponseSuccess<SuccessPayload> {
  return httpClient.request<SuccessPayload>({
    ...config,
  });
}
