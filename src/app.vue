<template>
  <div class="app">
    <Menubar
      :model="menuItems"
      class="app-header"
    />
    <NuxtLayout class="app-layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const client = useSupabaseClient()
const user = useSupabaseUser()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleLogout = async () => {
  await client.auth.signOut()
  await navigateTo('/login')
}

const menuItems = computed(() => {
  const items = [
    {
      label: colorMode.value === 'dark' ? 'Светлая тема' : 'Тёмная тема',
      icon: colorMode.value === 'dark' ? 'pi pi-sun' : 'pi pi-moon',
      command: toggleTheme
    }
  ]

  if (user.value) {
    items.push({
      label: 'Выход',
      icon: 'pi pi-sign-out',
      command: handleLogout
    })
  }

  return items
})
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

.glass
  backdrop-filter: blur(12px)
  -webkit-backdrop-filter: blur(12px)
  border-radius: 16px
  transition: background 0.3s ease, border 0.3s ease
  background-color: rgba(255, 255, 255, 0.2)
  border: 1px solid rgba(255, 255, 255, 0.3)
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1)

.dark .glass
  background-color: rgba(30, 30, 30, 0.25)
  border: 1px solid rgba(255, 255, 255, 0.1)
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3)

.app-header.p-menubar
  &.glass
    background: transparent !important

.glass .p-card-content
  background: transparent !important
</style>
