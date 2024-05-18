<template>
  <HeaderProduct/>

  <div class="product">
    <img
      class="product__image"
      :src="product.url">

    <div class="product__detail">
      <h3 class="product__name">
        {{ product.name }}
      </h3>

      <p class="product__description">
        {{ product.description }}
      </p>

      <div class="product__choice">
        <h3 class="product__choice-price">
          {{ product.price }} ₽
        </h3>

        <BaseButton
          :is-color="true"
          :name="addInBasket"
          :condition="!existThisProduct"
          is-type-btn
          @clickBtn="addProduct(product)"/>

        <BaseButton
          :is-color="true"
          name="Удалить"
          :condition="existThisProduct"
          is-type-btn
          @clickBtn="minusProduct(product)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import HeaderProduct from '@/components/blocks/HeaderProduct.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'CurrentProductPage',
  components: {
    HeaderProduct,
    BaseButton
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const addInBasket = ref('В корзину')

    const existThisProduct = computed(() => {
      const productsInBasket = store.getters.getBasketProducts.find(val => val.id === +route.params.id)
      return Boolean(productsInBasket)
    })

    onMounted(() => {
      store.commit('setCurrentProduct', route.params.id)
    })

    const product = computed(() => {
      return store.getters.getCurrentProduct
    })

    const updateData = () => {
      store.commit('updateCountProductsInBasket')
      store.commit('updateAllPricePoductsInBasket')
    }

    const addProduct = (product) => {
      store.commit('add', product)
      updateData()
    }

    const minusProduct = (product) => {
      store.commit('minus', product.id)
      updateData()
    }

    return {
      product,
      addProduct,
      addInBasket,
      minusProduct,
      existThisProduct
    }
  }
}
</script>

<style lang="scss" scoped>
  :deep(.header) {
    justify-content: flex-end;
  }

  :deep(.header__title) {
    display: none;
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;

    @media screen and (max-width: 1280px) {
      flex-direction: column;
    }

    &__image {
      width: 501px;
      height: 503px;
      margin-left: 140px;
    }

    &__name {
      font-size: 30px;
      color: #D58C51;
    }

    &__description {
      width: 548px;
      margin: 21px 0px 34px 0px;
      font-size: 14px;
    }

    &__choice {
      display: flex;
      align-items: center;
      gap: 140px
    }

    &__choice-price {
      font-size: 23px;
    }
}
</style>
