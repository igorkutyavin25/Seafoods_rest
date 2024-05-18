<template>
  <HeaderBasket/>
  <Main
    :products="basketProducts"
    :is-basket="true">
  </Main>
  <FooterBasket/>
</template>

<script>
import HeaderBasket from '@/components/blocks/HeaderBasket.vue'
import Main from '@/components/blocks/Main.vue'
import FooterBasket from '@/components/blocks/FooterBasket.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'BasketPage',
  components: {
    HeaderBasket,
    Main,
    FooterBasket
  },
  props: {
  },
  setup () {
    const store = useStore()

    const basketProducts = computed(() => {
      return store.getters.getBasketProducts
    })

    return {
      basketProducts
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 250px);
    overflow: auto;
  }

  :deep(.card) {
    align-items: center;
    justify-content: center;
    gap: 125px;
    margin: 0px;
    padding: 0px;
    border: none;
  }

  :deep(.card__image) {
    width: 122px;
    height: 122px;
  }

  :deep(.card__name) {
    width: 310px;
  }

  :deep(.card__description) {
    display: none;
  }

  :deep(.card__choice) {
    align-items: center;
    gap: 10px;
  }
</style>
