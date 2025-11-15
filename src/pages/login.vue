<template>
  <div class="login-page">
    <AuthForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'guest'
})

onMounted(() => {
  navigateTo('/login')
})
</script>

<style scoped lang="sass">
.login-page
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>
