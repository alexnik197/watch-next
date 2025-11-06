import { defineStore } from 'pinia'
import type { MovieType } from '~/shared/ui/input-search/types.ts'

export const useMovieSearch = defineStore('movieSearch', () => {
    const movies = ref<MovieType[]>([])
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    async function fetchMovies(query: string, page = 1, limit = 10) {
        if (!query || query.length < 3) {
            movies.value = []
            return
        }

        loading.value = true
        error.value = null

        try {
            console.log(query)
            // const { data, error: fetchError } = await useFetch<{ docs: MovieType[] }>(
            //   `https://api.kinopoisk.dev/v1.4/movie/search`,
            //   {
            //     params: {
            //       page,
            //       limit,
            //       query
            //     },
            //     headers: {
            //       'X-API-KEY': 'SES048T-K9Q4BKH-G4N1G5E-E466EYS'
            //     }
            //   }
            // )
            //
            // if (fetchError.value) {
            //   throw new Error(fetchError.value.message)
            // }
            //
            // if (data.value) {
            //   movies.value = data.value.docs
            // }
        } catch (e) {
            error.value = e.message
            movies.value = []
        } finally {
            loading.value = false
        }
    }

    function clearMovieList () {
    movies.value = []
    loading.value = false
}

    return {
        movies,
        loading,
        error,
        fetchMovies,
        clearMovieList
    }
})
