<template>
  <AutoComplete
    v-model="selectedValue"
    :suggestions="suggestions"
    option-label="name"
    placeholder="Поиск..."
    class="w-full md:w-56"
    :loading="loading"
    empty-search-message="Фильм не найден..."
    @complete="search"
  >
    <template #option="slotProps">
      <div>{{ slotProps.option.name }}</div>
    </template>
  </AutoComplete>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import AutoComplete, { type AutoCompleteCompleteEvent } from 'primevue/autocomplete'
import type { ApiOptionType, MovieType } from '~/shared/ui/input-search/types.ts'
import { useMovieSearch } from './store'

const movieSearch = useMovieSearch()
const { loading } = storeToRefs(movieSearch)

// Типизировать any
const selectedValue = ref<any | null>(null)
const suggestions = ref<MovieType[]>([])

// Переписать на watchDebounced
watchDebounced(selectedValue, (newVal) => {
  console.log(newVal)
}, { debounce: 1000 }
)

// const search = async (event: AutoCompleteCompleteEvent) => {
//   const query = event.query.trim()
//
//   if (query.length >= 3) {
//     selectedValue.value = query.trim()
//     await movieSearchStore.fetchMovies(query)
//     suggestions.value = movieSearchStore.movies
//   }
// }
</script>
