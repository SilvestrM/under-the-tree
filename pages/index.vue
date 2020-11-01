<template>
  <div class="wrapper">
    <section
      style="margin-top: -3rem;"
      class="section fullheight jumbo justify-center landing"
    >
      <div id="title" class="jumbo-content" style="margin-top: -10rem;">
        <h1 class="title is-big">
          {{ $t("homepage.siteName") }}
        </h1>
        <p class="subtitle is-big italic">
          {{ $t("homepage.catchPhrase") }}
        </p>
        <a style="margin-top: 1rem;" href="#" class="button">{{
          $t("homepage.browse")
        }}</a>
      </div>
    </section>
    <section id="games-box" style="margin-top: -8rem;" class="section">
      <div class="container box">
        <div class="justify-center">
          <h2 class="title is-medium spaced">{{ $t("homepage.madeByUs") }}</h2>
        </div>
        <hr />
        <div class="section">
          <div id="box-1" class="cols sectioned">
            <div class="col half">
              <span class="card-header">
                <h3 class="title is-small">{{ $t("homepage.game1Name") }}</h3>
                <span class="status text-uppercase">{{
                  $t("homepage.inDevelopement")
                }}</span>
              </span>
              <p>
                {{ $t("homepage.game1Desc") }}
              </p>
              <div>
                <nuxt-link :to="localePath('take_a_walk')" class="button">{{
                  $t("homepage.moreInfo")
                }}</nuxt-link>
              </div>
            </div>
            <div class="col half vert-centered">
              <figure>
                <img src="https://via.placeholder.com/500x250.png" alt srcset />
              </figure>
            </div>
          </div>

          <div id="box-2" class="cols sectioned box light">
            <div class="col half vert-centered">
              <figure>
                <img src="https://via.placeholder.com/500x250.png" alt srcset />
              </figure>
            </div>
            <div class="col half">
              <span class="card-header">
                <h3 class="title is-small">{{ $t("homepage.game2Name") }}</h3>
                <span class="status text-uppercase">{{
                  $t("homepage.inDevelopement")
                }}</span>
              </span>
              <p>
                {{ $t("homepage.game2Desc") }}
              </p>
              <div>
                <nuxt-link to="take_a_walk" class="button"
                  >{{ $t("homepage.moreInfo") }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    this.$gsap.to("#games-box", {
      scrollTrigger: {
        trigger: "#games-box",
        start: "top 75%",
        // endTrigger: "#title",
        // end: "-=200",
        scrub: 0.5,
      },
      y: -200,
    })
    this.$gsap.set("#box-1", { opacity: 0 })
    this.$gsap.to("#box-1", {
      scrollTrigger: { trigger: "#box-1", start: "top 80%" },
      opacity: 1,
    })
    this.$gsap.set("#box-2", { opacity: 0 })
    this.$gsap.to("#box-2", {
      scrollTrigger: { trigger: "#box-2", start: "top bottom" },
      opacity: 1,
    })
  },
}
</script>
<style lang="scss">
#app {
  background-color: $gray-lighter;
}
</style>

<style lang="scss" scoped>
.wrapper {
  color: $white-ish;
  background-color: $gray-dark;
}
#box-1,
#box-2,
#games-box,
#title {
  transition: all $tspeed;
}
</style>
