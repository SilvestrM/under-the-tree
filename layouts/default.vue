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

<style lang="scss">
// @import url("~assets/style/main.scss");
</style>
