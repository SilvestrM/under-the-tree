<template>
  <div style="grid-area: menu;" class="content">
    <h2>{{ $t("about.heading") }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore
      id sapiente iusto recusandae, numquam quidem blanditiis deleniti hic esse,
      rem neque porro dolorum nam. Provident aspernatur temporibus fugiat
      soluta.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore
      id sapiente iusto recusandae, numquam quidem blanditiis deleniti hic esse,
      rem neque porro dolorum nam. Provident aspernatur temporibus fugiat
      soluta.
    </p>
  </div>
</template>
<script>
export default {
  layout: "jumbo",
}
</script>

<style lang="scss" scoped>
.content {
  align-self: flex-start;
  justify-self: center;
  width: clamp(10rem, 100%, 125ch);

  // @include break($mobile) {
  //   align-self: center;
  // }

  @include break($tablet) {
    justify-self: flex-start;
  }
}
</style>
