import { $fetch, type FetchOptions } from 'ofetch'

export const kinopoiskApi = (url: string, options: FetchOptions = {}) => {
  const config = useRuntimeConfig()

  return $fetch(url, {
    baseURL: config.kinopoiskApiUrl,
    ...options,
    headers: {
      'X-API-KEY': config.kinopoiskApiKey,
      'Accept': 'application/json',
      ...options.headers,
    }
  })
}