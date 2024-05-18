<template>
  <header class="header">
    <h2 class="header__title">
      наша продукция
    </h2>

    <img class="logo" src="@/assets/crab2.svg" alt="">
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
  name: 'HeaderMain',
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

    &__title {
      font-size: 31px;
    }

    &__rigth-block {
      display: flex;
      gap: 20px;
    }
}
.logo {
  width: 150px;
  margin-top: -32px
}
</style>
