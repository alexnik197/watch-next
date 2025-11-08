import { kinopoiskApi } from '~/server/utils/kinopoisk'

export default defineEventHandler(async (event) => {
  const { query, page = 1, limit = 10 } = getQuery(event)

  if (!query || typeof query !== 'string') {
    throw createError({ statusCode: 400, message: 'Параметр "query" обязателен' })
  }

  return await kinopoiskApi('/v1.4/movie/search', {
    params: { query, page, limit }
  })
})