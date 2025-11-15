<template>
  <div class="px-4">
    <div class="my-4">
      <Card>
        <template #title>
          Welcome to PrimeVue 4 + Nuxt App
        </template>
        <template #content>
          <InputSearch />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import InputSearch from "~/shared/ui/input-search/InputSearch.vue"

definePageMeta({
  middleware: 'auth'
})

</script>

<style lang="sass">
.p-m-4
  margin: 2rem
</style>