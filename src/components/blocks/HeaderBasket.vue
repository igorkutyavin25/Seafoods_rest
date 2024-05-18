<template>
  <header class="header">
    <router-link to="/products">
      <img
      class="header__back-btn"
      src="../icons/backBtn.png">
    </router-link>

    <h2 class="header__title">
      Корзина с выбранными товарами
    </h2>

    <router-link to="/">
        <BaseButton
          name="Выйти"
          @clickBtn="back"/>
    </router-link>
  </header>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
  name: 'HeaderBasket',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const back = () => {
      localStorage.setItem('isLogged', false)
    }

    return {
      back
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    margin: 54px 70px 65px -10px;

    &__title {
      margin-left: 63px;
      font-size: 31px;
    }
  }

  :deep(.transparent_btn) {
    margin-left: 114px;
  }
</style>
