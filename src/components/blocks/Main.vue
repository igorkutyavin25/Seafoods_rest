<template>
  <main class="main">
    <card
      v-for="(product, index) in products"
      :key="index"
      :url="product.url"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :is-basket = isBasket
      :exist-product-in-basket="existProductInBasket(product)"
      :product="product"
      @click.stop="goToProduct(product.id)"
    />
  </main>
</template>

<script>
import Card from '@/components/elements/CardProduct.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'TheMain',
  components: {
    Card
  },
  props: {
    products: {
      type: Array,
      default () {
        return []
      }
    },
    isBasket: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    const existProductInBasket = (product) => {
      const productsInBasket = store.getters.getBasketProducts.find(val => val.id === +product.id)
      return Boolean(productsInBasket)
    }

    const goToProduct = (id) => {
      router.push(`/${id}`)
    }

    return {
      goToProduct,
      existProductInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
