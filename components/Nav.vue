<template>
  <nav id="nav">
    <div class="fixer">
      <div class="nav-content container">
        <div style="justify-self: start;" class="nav-section">
          <router-link class="nav-item" to="/">Logo</router-link>
        </div>
        <div style="justify-self: end;" class="nav-section">
          <nuxt-link class="nav-item" to="/">Games</nuxt-link>
          <nuxt-link class="nav-item" to="/about">About us</nuxt-link>
          <nuxt-link class="nav-item" to="/about">EN</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
