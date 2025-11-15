<template>
  <Form class="auth-form">
    <h2>Авторизация</h2>
    <div class="auth-inputs">
      <FloatLabel variant="on">
        <InputText
          id="auth-email"
          v-model="email"
          type="text"
          fluid
        />
        <label for="auth-email">Логин</label>
      </FloatLabel>

      <FloatLabel variant="on">
        <InputText
          id="auth-pass"
          v-model="password"
          type="text"
          fluid
          toggle-mask
        />
        <label for="auth-pass">Пароль</label>
      </FloatLabel>

      <Message
        v-if="errorMessage"
        severity="error"
      >
        {{ errorMessage }}
      </Message>
      <Message
        v-if="successMessage"
        severity="success"
      >
        {{ successMessage }}
      </Message>
    </div>
    <div class="auth-actions">
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
  </Form>
</template>

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
    password: password.value
  })

  if (error) {
    errorMessage.value = error.message
  } else {
    successMessage.value =
      'Регистрация успешна! Проверьте вашу почту для подтверждения.'
    // Если пользователь сразу авторизован после регистрации, перенаправляем на главную
    if (data.user) {
      await navigateTo('/')
    }
  }

  loading.value = false
}

// Функция для входа
const handleSignIn = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    errorMessage.value = error.message
    loading.value = false
  } else {
    successMessage.value = 'Вход выполнен успешно!'
    // Ждем обновления состояния пользователя перед редиректом
    await nextTick()
    await navigateTo('/')
  }
}
</script>

<style scoped lang="sass">
.auth
  &-form
    display: flex
    flex-direction: column
    align-items: center
    width: 25rem
    gap: 1rem
  &-inputs
    width: 100%
  &-actions
    width: 100%
    display: flex
    flex-direction: row
    justify-content: space-between
</style>
