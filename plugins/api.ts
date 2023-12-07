import { $fetch, type FetchOptions } from "ohmyfetch";
import { defineNuxtPlugin } from "#app";
import TranslateModule from "../repository/modules/translate";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  translate: TranslateModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.API_BASE_URL,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    translate: new TranslateModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
