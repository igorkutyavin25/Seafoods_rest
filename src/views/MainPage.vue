<template>
  <HeaderMain/>
  <Main
    :products="products"
    :is-basket="false">
  </Main>
</template>

<script>
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    Main
  },
  props: {
  },
  setup () {
    const store = useStore()

    const products = computed(() => {
      return store.getters.getProducts
    })

    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: calc(100vh - 150px);
    overflow: auto;
  }

  :deep(.card) {
    flex-direction: column;
    width: 312px;
  }
</style>
