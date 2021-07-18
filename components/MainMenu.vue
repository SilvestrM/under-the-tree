<template>
  <div>
    <ul class="menu-list" key="1" v-show="activeMenu === 1">
      <li class="menu-item">
        <button class="button" @click="switchMenu(2)">
          <span class="iconify" data-icon="entypo:game-controller"></span>
          {{ $t("nav.games") }}
        </button>
        <!-- <ul>
          <li class="menu-item">
            <nuxt-link class="button" :to="localePath('take_a_walk')">{{
              $t("nav.games")
            }}</nuxt-link>
          </li>
        </ul> -->
      </li>
      <li class="menu-item">
        <a
          class="button"
          target="_blank"
          href="https://www.instagram.com/micciellythealchemist/"
        >
          <span class="iconify" data-icon="entypo-social:instagram"></span>
          {{ $t("nav.instagram") }}
        </a>
      </li>
      <li class="menu-item">
        <a
          class="button"
          target="_blank"
          href="https://www.youtube.com/channel/UCy6Axn0IWzF3AM4mLpSvJYw"
        >
          <span class="iconify" data-icon="entypo-social:youtube"></span>
          {{ $t("nav.youtube") }}
        </a>
      </li>
      <li class="menu-item">
        <nuxt-link class="button" :to="localePath('about')">
          <span class="iconify" data-icon="entypo:users"></span>
          {{ $t("nav.about") }}
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="button" :to="localePath('contact')">
          <span class="iconify" data-icon="entypo:mail"></span>
          {{ $t("footer.contact") }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="menu-list" key="2" v-show="activeMenu === 2">
      <li class="menu-item header">
        <h3>
          <span class="iconify" data-icon="entypo:game-controller"></span>
          {{ $t("nav.games") }}
        </h3>
      </li>
      <li class="menu-item">
        <nuxt-link class="button" :to="localePath('take_a_walk')">{{
          $t("taw.gameName")
        }}</nuxt-link>
        <ul>
          <li class="menu-item">
            <a
              class="button"
              target="_blank"
              title="https://www.instagram.com/micciellythealchemist/"
              href="https://www.instagram.com/micciellythealchemist/"
              >{{ $t("people.mici.name") }}</a
            >
          </li>
        </ul>
      </li>
      <li class="menu-item">
        <button class="button inverted" @click="switchMenu(1)">
          <span class="iconify" data-icon="entypo:chevron-left"></span>
          {{ $t("general.back") }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      activeMenu: 1,
      animationTweenOut: Object,
      animationTweenIn: Object,
    }
  },
  mounted() {
    this.animationTweenIn = this.$gsap
      .fromTo(
        ".menu-item",
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
      .kill()
    this.animationTweenOut = this.$gsap
      .fromTo(
        ".menu-item",
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
      .kill()
  },
  methods: {
    switchMenu(number) {
      this.animationTweenOut.restart().then(() => {
        this.activeMenu = number
        this.animationTweenIn.restart()
      })
    },
  },
  watch: {
    activeMenu() {},
  },
}
</script>

<style lang="scss" scoped>
ul.menu-list {
  margin: 0;
  padding: 0;
  align-self: flex-start;
  justify-self: center;
  list-style: none;

  @include break($mobile) {
    align-self: center;
  }

  @include break($tablet) {
    justify-self: flex-start;
  }
  width: 100%;
  li {
    margin: 0.75rem 0;
    .button {
      width: 100%;
      text-align: left;
    }
  }
  ul {
    list-style: none;
    li {
      margin: 0 0.5rem;
      .button {
        padding: 0.5rem;
      }
    }
  }
}

.menu-item {
  a,
  button {
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
  }
  &.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
