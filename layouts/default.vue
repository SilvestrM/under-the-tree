<template>
  <div id="app">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from "~/components/Nav"
import Footer from "~/components/Footer"

export default {
  components: { Nav, Footer },
}
</script>

<style lang="scss" scoped>
// @import url("~assets/style/main.scss");
#app {
  padding-top: 4rem;
  padding-bottom: $footer-height;
}
</style>
