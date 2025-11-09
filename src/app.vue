<template>
  <div class="app">
    <Menubar :model="menuItems" class="app-header" />
    <NuxtLayout class="app-layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Auth',
    icon: 'pi pi-info-circle',
    command: () => {
      router.push('/auth')
    }
  },
  {
    label: 'Change theme',
    icon: 'pi pi-sun',
    command: () => {
      console.log('check')
    }
  }
]

</script>

<style lang="sass">
.app
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  height: 100vh
  &-header
    display: flex
    flex-direction: row
    align-items: center
    width: 80%
  &-layouts
    display: flex
    align-items: center
    flex-direction: column
    height: 100%
    width: 80%
</style>