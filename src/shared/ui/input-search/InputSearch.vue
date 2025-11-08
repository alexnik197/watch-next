<template>
  <AutoComplete
    v-model="modelValue"
    :suggestions="movies"
    option-label="name"
    placeholder="Поиск..."
    class="search"
    :loading="loading"
    empty-search-message="Фильм не найден..."
    :show-clear="true"
    @clear="onClear"
    @item-select="onItemSelect"
  />
  <small v-if="error" class="p-error">{{ error }}</small>
</template>

<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import type { Movie } from '~/shared/ui/input-search/MovieTypes'
import { useMovieStore } from './store'

const movieStore = useMovieStore()
const { loading, movies, error } = storeToRefs(movieStore)

const modelValue = ref<string | Movie | null>(null)

watchDebounced(modelValue, async (newValue) => {
  if (!newValue) {
    movieStore.reset()
    return
  }

  const query = (typeof newValue === 'string' ? newValue : newValue.name).trim()

  if (query.length < 3) {
    movieStore.reset() // Очищаем, если запрос слишком короткий
    return
  }
  await movieStore.searchMovies(query, 1)

}, { debounce: 500, maxWait: 1000 })

const onItemSelect = (event: { originalEvent: Event, value: Movie }) => {
  console.log('Выбран фильм:', event.value)
  // Здесь можно, например, перейти на страницу фильма:
  // await navigateTo(`/movies/${event.value.id}`)
}

const onClear = () => {
  modelValue.value = null
  movieStore.reset()
}
</script>

<style scoped lang="sass">
.search
  width: 20rem
</style>