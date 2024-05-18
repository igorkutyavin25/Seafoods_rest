<template>
  <img
    :src="url"
    @click.stop="$emit('clickBtn')">
</template>

<script>
export default {
  name: 'ButtonImgUi',
  components: {
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
  img {
    cursor: pointer;
  }
</style>
