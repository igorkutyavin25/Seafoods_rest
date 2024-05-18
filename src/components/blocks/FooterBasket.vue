<template>
  <footer class="footer">
    <div class="footer__amount">
      <span class="footer__amount-label">
      ЗАКАЗ НА СУММУ:
      </span>
      <span class="footer__amount-sum">
        {{ allSum }} ₽
      </span>
    </div>

    <BaseButton
      :name="sendOrderBtn"
      :is-color="true"
      @clickBtn="send"/>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'FooterBasket',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const store = useStore()
    const sendOrderBtn = 'Оформить заказ'

    const allSum = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const send = () => {
      alert('Заказ оформлен')
      store.commit('clearBasket')
      store.commit('updateCountProductsInBasket')
      store.commit('updateAllPricePoductsInBasket')
    }

    return {
      allSum,
      sendOrderBtn,
      send
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 505px;
    padding-top: 20px;
    border-top: 1px solid #D58C51;

    &__amount {
      display: flex;
      gap: 15px;
    }

    &__amount-label {
      font-size: 21px;
    }

    &__amount-sum {
      font-size: 18px;
      color: #D58C51;
    }
  }
</style>
