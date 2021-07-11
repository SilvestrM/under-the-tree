<template>
  <div style="grid-area: menu;" class="main-menu">
    <MainMenu />
  </div>
</template>

<script>
import MainMenu from "~/components/MainMenu"

export default {
  layout: "jumbo",
  components: { MainMenu },
}
</script>

<style lang="scss" scoped>
.main-menu {
  align-self: flex-start;
  justify-self: center;
  width: clamp(10rem, 100%, 20rem);

  @include break($mobile) {
    align-self: center;
  }

  @include break($tablet) {
    justify-self: flex-start;
  }
}
</style>
