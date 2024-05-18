<template>
  <div class="registration">
    <Form
      link-name-on-other-form="Авторизоваться"
      link-on-other-form="/"
      title="Регистрация"
      name-btn="Зарегистрироваться"
      need-radio-btn
      :agree-check-box-msg="agreeCheckBoxMsg"
      :empty-field="emptyField"
      :in-valid-format="inValidFormat"
      @submit-action="submit">
    </Form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Form from '@/components/elements/Form.vue'

export default {
  name: 'RegPage',
  components: {
    Form
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const agreeCheckBoxMsg = ref('Я согласен получать обновления на почту')

    const emptyField = ref({
      login: false,
      password: false
    })

    const inValidFormat = ref({
      login: false,
      password: false
    })

    const checkFields = (login, password) => {
      let isValid = true

      if (!login) {
        emptyField.value.login = true
        isValid = false
      } else {
        emptyField.value.login = false
      }

      if (!password) {
        emptyField.value.password = true
        isValid = false
      } else {
        emptyField.value.password = false
      }

      if (login && login.length < 4) {
        inValidFormat.value.login = true
        isValid = false
      } else {
        inValidFormat.value.login = false
      }

      if (password && password.length < 4) {
        inValidFormat.value.password = true
        isValid = false
      } else {
        inValidFormat.value.password = false
      }

      return isValid
    }

    const saveUserData = (user, users) => {
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }

    const submit = (user) => {
      const login = user.login
      const password = user.password
      const agreeToReceiveUpdates = user.agreeToReceiveUpdates

      if (!checkFields(login, password)) {
        return
      }

      const usersDataJson = localStorage.getItem('users')

      if (usersDataJson) {
        const usersStore = JSON.parse(usersDataJson)

        const existUser = usersStore.find((user) => {
          return user.login === login
        })

        if (!existUser) {
          saveUserData(user, usersStore)
        } else {
          usersStore.forEach(user => {
            if (user.login === login) {
              user.password = password
              user.agreeToReceiveUpdates = agreeToReceiveUpdates
            }
          })
          localStorage.setItem('users', JSON.stringify(usersStore))
        }
      } else {
        const users = []
        saveUserData(user, users)
        localStorage.setItem('isLogged', false)
      }

      router.push('/')
    }

    return {
      agreeCheckBoxMsg,
      submit,
      checkFields,
      emptyField,
      inValidFormat
    }
  }
}
</script>

<style lang="scss" scoped>
  .registration {
    background-image: url("../components/icons/bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
