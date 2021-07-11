<template>
  <div>
    <canvas ref="canvas" class="webgl"></canvas>
  </div>
</template>
<script>
import { runThree } from "~/mixins/three.main.js"
export default {
  mounted() {
    runThree(this.$refs.canvas)
  },
}
</script>
<style lang="scss" scoped>
.webgl {
  width: 100%;
  min-height: 100%;
}
</style>
