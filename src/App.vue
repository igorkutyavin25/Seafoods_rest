<template>
  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()

    const isLogged = JSON.parse(localStorage.getItem('isLogged'))
    if (!isLogged) {
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

<style lang="scss">
  body {
    background-color: #161516;
    color:#ffffff;
  }
</style>
