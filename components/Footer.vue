<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-item">
          <ul class="horizontal-list">
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
              target="blank"
              href="https://www.instagram.com/takeawalkgame/"
              ><IconifyIcon height="32" :icon="icons.bxlInstagram"
            /></a>
            <a class="is-text-dark" href=""
              ><IconifyIcon height="32" :icon="icons.bxlFacebook"
            /></a>

            <a class="is-text-dark" href=""
              ><IconifyIcon height="32" :icon="icons.bxlPlayStore"
            /></a>
          </div>
          <div class="text-small faded">
            WEB by
            <a target="_blank" href="http://mikeska.design">mikeska.design</a>
          </div>
        </div>
        <span class="footer-item"
          >&copy; {{ new Date().getFullYear() }} {{ $t("footer.copy") }}</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
import IconifyIcon from "@iconify/vue"
import bxlFacebook from "@iconify/icons-bx/bxl-facebook-square"
import bxlInstagram from "@iconify/icons-bx/bxl-instagram"
import bxlPlayStore from "@iconify/icons-bx/bxl-play-store"
export default {
  components: {
    IconifyIcon,
  },
  data() {
    return {
      icons: {
        bxlFacebook,
        bxlInstagram,
        bxlPlayStore,
      },
    }
  },
}
</script>

<style></style>
