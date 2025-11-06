<template>
  <div class="px-4">
    <Menubar :model="menuItems" />
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
import Menubar from 'primevue/menubar'
import Card from 'primevue/card'
import InputSearch from '~/shared/ui/input-search/InputSearch.vue'

const menuItems = [
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle'
  }
]
</script>

<style lang="sass">
.p-m-4
  margin: 2rem
</style>
