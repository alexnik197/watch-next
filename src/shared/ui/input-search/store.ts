import { defineStore } from 'pinia'
import type { MovieSearchResponse, Movie } from '~/shared/ui/input-search/MovieTypes'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref<Movie[]>([])
  const total = ref<number>(0)
  const pages = ref<number>(1)
  const currentPage = ref<number>(1)
  const limit = ref<number>(10)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const searchMovies = async (query: string, page: number = 1) => {
    loading.value = true
    error.value = null

    try {
      const data = await $fetch<MovieSearchResponse>('/api/movies/search', {
        method: 'GET',
        query: {
          query: query.trim(),
          page,
          limit: limit.value
        },
      })

      console.log(data)

      movies.value = data.docs
      total.value = data.total
      pages.value = data.pages
      currentPage.value = data.page
      limit.value = data.limit

    } catch (err: any) {
      console.error('[MovieStore] searchMovies error:', err)
      error.value = err?.data?.message || err?.message || 'Произошла ошибка при поиске'
    } finally {
      loading.value = false
    }
  }

  const reset = () => {
    movies.value = []
    total.value = 0
    currentPage.value = 1
    limit.value = 10
    error.value = null
  }

  const hasMore = computed(() => {
    return currentPage.value * limit.value < total.value
  })

  return {
    movies,
    total,
    currentPage,
    limit,
    loading,
    error,
    searchMovies,
    reset,
    hasMore
  }
})