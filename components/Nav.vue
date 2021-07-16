<template>
  <nav :class="{ transparent: reduced }" id="nav">
    <div class="fixer">
      <div class="nav-content container">
        <div style="justify-self: start;" class="nav-section">
          <!-- <router-link class="nav-item" :to="localePath('/')">Logo</router-link> -->
          <transition name="fade">
            <div v-if="$nuxt.layoutName == 'default'" class="nav-item">
              <span style="font-size: 1.1em;">{{
                $t("homepage.siteName")
              }}</span>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="$route.path != '/'" class="nav-item">
              <nuxt-link
                style="padding: 0.5rem;"
                class="button inverted"
                :to="localePath('/')"
                >{{ $t("nav.mainMenu") }}</nuxt-link
              >
            </div>
          </transition>
        </div>
        <div style="justify-self: end;" class="nav-section">
          <!-- <nuxt-link class="nav-item" :to="localePath('/')">{{
            $t("nav.games")
          }}</nuxt-link>
          <nuxt-link class="nav-item" :to="localePath('/about')">{{
            $t("nav.about")
          }}</nuxt-link> -->
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            class="nav-item"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    reduced: { type: Boolean, default: false },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
.button.inverted {
  background-color: transparent;
  color: $white-ish;
  border-color: $white-ish;

  &:hover {
    background-color: hsla(0, 0%, 40%, 0.9);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
