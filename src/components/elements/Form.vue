<template>
    <form
        class="form"
        @submit.prevent="$emit('submitAction', {
          login: this.login,
          password: this.password,
          agreeToReceiveUpdates: this.agreeToReceiveUpdates
        })">

      <router-link :to="linkOnOtherForm">
        <a
          class="form__link"
          href="#">
          {{ linkNameOnOtherForm }}
        </a>
      </router-link>

      <h2 class="form__title">
        {{ title }}
      </h2>

      <span class="form__mandatory-field">
        <input
          class="form__input"
          type="text"
          v-model="login"
          placeholder="Логин">

        <p
          class='error_text'
          v-show="emptyField.login">
          Поле не должно быть пустым
        </p>

        <p
          class='error_text'
          v-show="inValidFormat.login">
          Логин должен содержать не менее 4-х символов
        </p>
      </span>

      <span class="form__mandatory-field">
        <input
          class="form__input"
          type="password"
          v-model="password"
          placeholder="Пароль">

        <p
          class='error_text'
          v-show="emptyField.password">
          Поле не должно быть пустым
        </p>

        <p
          class='error_text'
          v-show="inValidFormat.password">
          Пароль должен содержать не менее 4-х символов
        </p>
      </span>

      <label
        class="form__agree"
        v-show="needRadioBtn">
          <input class="form__agree-radio"
            type="radio"
            name="agree"
            v-model="agreeToReceiveUpdates">
        {{ agreeCheckBoxMsg }}
      </label>

      <p
        class="error_text"
        v-show="inValid.condition">
        Логин или пароль неверен
      </p>

      <BaseButton
        :is-type-btn="false"
        :name="nameBtn"
        :isColor="true"/>
    </form>
</template>

<script>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'FormVue',
  components: {
    BaseButton
  },
  props: {
    linkNameOnOtherForm: {
      type: String,
      default: ''
    },
    linkOnOtherForm: {
      type: String,
      default: ''
    },
    nameBtn: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    needRadioBtn: {
      type: Boolean,
      default: false
    },
    agreeCheckBoxMsg: {
      type: String,
      default: ''
    },
    emptyField: {
      type: Object,
      default () {
        return {
          login: false,
          password: false
        }
      }
    },
    inValid: {
      type: Object,
      default () {
        return {
          condition: false
        }
      }
    },
    inValidFormat: {
      type: Object,
      default () {
        return {
          login: false,
          password: false
        }
      }
    }
  },
  setup () {
    const login = ref('')
    const password = ref('')
    const agreeToReceiveUpdates = ref('')

    return {
      login,
      password,
      agreeToReceiveUpdates
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &__link {
      margin-top: 7px;
      margin-left: 330px;
      font-size: 11px;
      font-family: Montserrat_300, sans-serif;
      text-decoration: underline;
      color: #D58C51;
    }

    &__title {
      margin: 36px auto;
      font-size: 31px;
      color: #161516
    }

    &__mandatory-field {
      margin-bottom: 15px;
    }

    &__input {
      text-indent: 18px;
    }

    &__input::placeholder {
        margin: 10px 0px 10px 18px;
        color: #161516;
    }

    &__agree {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      margin-left: -150px;
      font-size: 11px;
      font-family: Montserrat_300, sans-serif;
      color: #301411;
  }

    &__agree-radio {
      border-radius: 50%;
    }
}
</style>
