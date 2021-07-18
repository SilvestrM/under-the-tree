<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-item">
          <ul class="links">
            <li>
              <nuxt-link :to="localePath('/about')">{{
                $t("footer.about")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/')">{{
                $t("footer.contact")
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-item">
          <div class="link-row justify-center">
            <a
              class="is-text-dark"
              target="_blank"
              href="https://www.instagram.com/takeawalkgame/"
            >
              <span
                class="iconify"
                data-icon="bx:bxl-instagram"
                data-inline="false"
                data-width="32px"
                data-height="32px"
              ></span>
            </a>
            <!-- <a class="is-text-dark" href="">
              <span
                class="iconify"
                data-icon="bx:bxl-facebook-circle"
                data-inline="false"
                data-width="32px"
                data-height="32px"
              ></span>
            </a> -->
            <a class="is-text-dark" href="">
              <span
                class="iconify"
                data-icon="bx:bxl-play-store"
                data-inline="false"
                data-width="32px"
                data-height="32px"
              ></span>
            </a>
          </div>
        </div>
        <div class="footer-item" style="align-items: flex-end;">
          <span style="margin-bottom: 0.5rem;">
            &copy; {{ new Date().getFullYear() }} {{ $t("footer.copy") }}
          </span>
          <span class="text-small faded">
            Designed by
            <a
              target="_blank"
              title="http://mikeska.design"
              href="http://mikeska.design"
            >
              Silvestr Mikeska
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped></style>
