<template>
  <div class="card">
    <img
      class="card__image"
      :src="url">

    <h3 class="card__name">
      {{ name }}
    </h3>

    <span class="card__description">
      {{ description }}
    </span>

    <div class="card__choice">
      <h3>
        {{ price }} ₽
      </h3>

      <BaseButtonImg
        :src="require(existProductInBasket ? '../icons/minusBtn.png' : '../icons/addBtn.png')"
        @clickBtn="action(isBasket, existProductInBasket, product)"/>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import BaseButtonImg from '@/components/ui/BaseButtonImg.vue'

export default {
  name: 'CardProduct',
  components: {
    BaseButtonImg
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    isBasket: {
      type: Boolean,
      default: false
    },
    existProductInBasket: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup () {
    const store = useStore()

    const updateData = () => {
      store.commit('updateCountProductsInBasket')
      store.commit('updateAllPricePoductsInBasket')
    }

    const action = (isBasket, existProductInBasket, product) => {
      if (isBasket || existProductInBasket) {
        store.commit('minus', product.id)
        updateData()
      } else {
        store.commit('add', product)
        updateData()
      }
    }

    return {
      action
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    margin-bottom: 35px;
    padding: 43px 21px 36px 21px;
    border: 1px solid #D58C51;

    &:hover {
      color: #D58C51;
    }

    &__image {
      margin-bottom: 31px;
    }

    &__name {
      height: 42px;
      margin-bottom: 9px;
      font-size: 17px;
    }

    &__description {
      height: 68px;
      margin-bottom: 31px;
      font-size: 14px;
    }

    &__choice {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
