<template>
  <div class="px-4">
  <Menubar :model="menuItems" />
    <div class="search">
      <h2>Выберите свой любимый фильм</h2>
      <InputSearch />
    </div>
  </div>
</template>

<script setup>
import Menubar from 'primevue/menubar'
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
.search
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
  border: 1px solid #fcfcfc
  border-radius: 5px
  padding: 1rem 2rem
</style>
