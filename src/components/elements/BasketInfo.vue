<template>
  <div class="basket">
        <div class ="basket-sum summ">
          <h3 class="summ-count">
            {{ count }} товара</h3>

          <h3 class="summ-amount">
            на сумму {{ allPrice }} ₽
          </h3>
        </div>

        <router-link to="/basket">
          <img
          class="basket-icon"
          src="../icons/basket.png">
        </router-link>
      </div>
</template>

<script>
export default {
  name: 'BasketInfo',
  components: {
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    allPrice: {
      type: Number,
      default: 0
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

    .basket {
      display: flex;

      &-sum {
        display: flex;
        flex-direction: column;
      }
    }

    .summ {
      margin-right: 20px;
      font-size: 17px;
    }
</style>
