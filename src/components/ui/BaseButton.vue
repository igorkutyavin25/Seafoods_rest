<template>
  <input v-show="isTypeBtn && condition"
    type="button"
    :class="[isColor? colorBtn : transparentBtn]"
    :value="name"
    @click.stop="$emit('clickBtn')">

  <input v-show="!isTypeBtn && condition"
    type="submit"
    :class="[isColor? colorBtn : transparentBtn]"
    :value="name"
    @click.stop="$emit('clickBtn')">
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ButtonUi',
  components: {
  },
  props: {
    isTypeBtn: {
      type: Boolean,
      default: true
    },
    condition: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    isColor: {
      type: Boolean,
      default: false
    }
  },
  emits: ['clickBtn'],
  setup () {
    const colorBtn = ref('color_btn')
    const transparentBtn = ref('transparent_btn')

    return {
      colorBtn,
      transparentBtn
    }
  }
}
</script>

<style lang="scss" scoped>
  .transparent_btn {
    width: 200px;
    height: 42px;
    background-color: rgba(28,28,28,0);
    font-size: 14px;
    font-family: Montserrat_400, sans-serif;
    border: 1px solid #D58C51;
    color: #D58C51;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);
    }

    &:hover {
      background-color: #D58C51;
      color: #131313;
      border: none;
    }
  }

  .color_btn {
    width: 200px;
    height: 42px;
    font-size: 14px;
    font-family: Montserrat_400, sans-serif;
    background-color: #D58C51;
    color: #131313;
    border: none;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);
    }

    &:hover {
      background-color: rgba(28,28,28,0);
      border: 1px solid #D58C51;
      color: #D58C51;
    }
  }
</style>
