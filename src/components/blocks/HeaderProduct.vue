<template>
  <header class="header">
    <router-link to="/products">
      <img
      class="header__back-btn"
      src="../icons/backBtn.png">
    </router-link>

    <div class="header__rigth-block">
      <BasketInfo
        :count="count"
        :all-price="allPrice"/>

      <router-link to="/">
        <BaseButton
          name="Выйти"
          @clickBtn="back"/>
      </router-link>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseButton from '@/components/ui/BaseButton.vue'
import BasketInfo from '../elements/BasketInfo.vue'

export default {
  name: 'HeaderProduct',
  components: {
    BaseButton,
    BasketInfo
  },
  props: {
  },
  setup () {
    const store = useStore()

    const count = computed(() => {
      return store.getters.getCountProductsInBasket
    })

    const allPrice = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const back = () => {
      localStorage.setItem('isLogged', false)
    }

    return {
      count,
      allPrice,
      back
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin: 54px 70px 32px 70px;

    &__rigth-block {
      display: flex;
      gap: 20px;
    }
}
</style>
