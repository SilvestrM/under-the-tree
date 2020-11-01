<template>
  <nav id="nav">
    <div class="fixer">
      <div class="nav-content container">
        <div style="justify-self: start;" class="nav-section">
          <router-link class="nav-item" :to="localePath('/')">Logo</router-link>
        </div>
        <div style="justify-self: end;" class="nav-section">
          <nuxt-link class="nav-item" :to="localePath('/')">{{
            $t("nav.games")
          }}</nuxt-link>
          <nuxt-link class="nav-item" :to="localePath('/about')">{{
            $t("nav.about")
          }}</nuxt-link>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            class="nav-item"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style></style>
