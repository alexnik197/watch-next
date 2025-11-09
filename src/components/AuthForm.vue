<script setup lang="ts">
const client = useSupabaseClient()

// Реактивные переменные для данных формы
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Функция для регистрации
const handleSignUp = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMessage.value = error.message
  } else {
    successMessage.value = 'Регистрация успешна! Проверьте вашу почту для подтверждения.'
    // data.user содержит информацию о пользователе
    console.log('User registered:', data.user)
  }

  loading.value = false
}

// Функция для входа
const handleSignIn = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMessage.value = error.message
  } else {
    successMessage.value = 'Вход выполнен успешно!'
    // После успешного входа Nuxt автоматически обновит состояние пользователя
    // и мы можем перенаправить его, например, на дашборд
    console.log('User signed in:', data.user)
    // await navigateTo('/dashboard') // Пример редиректа
  }

  loading.value = false
}

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Card style="width: 25rem">
      <template #title>
        Авторизация
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <InputText id="email" v-model="email" type="email" aria-describedby="email-help" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Пароль</label>
            <InputText id="password" v-model="password" type="password" />
          </div>

          <Message v-if="errorMessage" severity="error">{{ errorMessage }}</Message>
          <Message v-if="successMessage" severity="success">{{ successMessage }}</Message>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button
            label="Войти"
            :loading="loading"
            icon="pi pi-sign-in"
            @click="handleSignIn"
          />
          <Button
            label="Регистрация"
            :loading="loading"
            icon="pi pi-user-plus"
            severity="secondary"
            @click="handleSignUp"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
