import { $fetch } from 'ofetch'
import { useRuntimeConfig } from '#imports'

export const kinopoiskApi = $fetch.create({
  baseURL: useRuntimeConfig().kinopoiskApiUrl,
  headers: {
    'X-API-KEY': useRuntimeConfig().kinopoiskApiKey,
    'Accept': 'application/json'
  },
  timeout: 10_000
})