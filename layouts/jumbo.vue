<template>
  <div id="app">
    <Nav :reduced="true" />
    <section class="section">
      <div class="container">
        <div class="grid-homepage">
          <transition
            :css="false"
            v-on:before-leave="transitionOutLeave"
            v-on:enter="transitionInEnter"
          >
            <Nuxt />
          </transition>
          <div style="grid-area: heading;" class="heading-wrapper">
            <h1 class="title">{{ $t("homepage.siteName") }}</h1>
            <p class="subtitle">{{ $t("homepage.catchPhrase") }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Nav from "~/components/Nav"

export default {
  components: { Nav },
  data() {
    return {}
  },
  methods: {
    transitionInEnter(el, done) {
      this.$gsap.fromTo(
        el,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          duration: 1,
          opacity: 1,
          ease: "elastic",
          stagger: {
            each: 0.15,
            ease: "slow",
          },
        }
      )
      done()
    },
    transitionOutLeave(el, done) {
      this.$gsap.fromTo(
        el,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -200,
          duration: 0.2,
          opacity: 0,
          ease: "expo",
          stagger: {
            each: 0.05,
          },
        }
      )
      done()
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  background: linear-gradient(0deg, #3b564a -0.88%, #515151 100%);
}

.container {
  height: 100vh;
  padding: 2rem;
}
.grid-homepage {
  //padding: 4rem;
  padding-top: 4rem;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  grid-template-areas: "heading" "menu";
  height: 100%;
  min-height: 0;
  gap: 2rem;
  //TODO fix buttons responisvity
  @include break($tablet) {
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: "menu heading";
  }
}
.heading-wrapper {
  //   position: relative;
  //   right: 4rem;
  //   top: 4rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.95;
  text-transform: capitalize;
  h1 {
    font-size: 5em;
    @include break($mobile) {
      font-size: 6em;
    }
    @include break($desktop) {
      font-size: 8em;
    }
    max-width: 5ch;
    margin: 0;
  }
  p {
    font-size: 1.8em;
    margin: 0;
  }
}
</style>
