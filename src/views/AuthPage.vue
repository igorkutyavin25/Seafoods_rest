<template>
  <div class="auth">
    <Form
      link-name-on-other-form="Зарегистрироваться"
      link-on-other-form="/registration"
      title="Вход"
      name-btn="Войти"
      :empty-field="emptyField"
      :in-valid="inValid"
      need-radio-btn
      :agree-check-box-msg="agreeCheckBoxMsg"
      @submitAction="submit">
    </Form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Form from '@/components/elements/Form.vue'

export default {
  name: 'AuthPage',
  components: {
    Form
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const agreeCheckBoxMsg = ref('Я согласен получать обновления на почту')

    const inValid = ref({
      condition: false
    })

    const emptyField = ref({
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

      return isValid
    }

    const submit = (user) => {
      inValid.value.condition = false

      const login = user.login
      const password = user.password
      const agreeToReceiveUpdates = user.agreeToReceiveUpdates

      if (!checkFields(login, password)) {
        return
      }

      const usersData = localStorage.getItem('users')
      if (!usersData) {
        inValid.value.condition = true
        return
      }

      const usersDataJson = JSON.parse(usersData)
      const existUser = usersDataJson.find((user) => user.login === login)

      if (existUser) {
        if (password === existUser.password) {
          usersDataJson.forEach(user => {
            if (user.login === login) {
              user.agreeToReceiveUpdates = agreeToReceiveUpdates
            }
          })
          localStorage.setItem('users', JSON.stringify(usersDataJson))
          localStorage.setItem('isLogged', true)
          router.push('/products')
        } else {
          inValid.value.condition = true
        }
      } else {
        inValid.value.condition = true
      }
    }

    return {
      submit,
      inValid,
      emptyField,
      agreeCheckBoxMsg
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
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
