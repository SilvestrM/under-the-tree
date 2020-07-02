<template>
  <div class="wrapper">
    <section id="taw-1" class="section fullheight jumbo">
      <div class="jumbo-content">
        <div class="image-wrapper">
          <img style="width: 40rem;" src="~/assets/images/taw/logo.png" alt />
        </div>
        <div
          style="flex-direction: column; bottom: 3rem;"
          class="is-relative is-flex align-center"
        >
          <h2 class="subtitle is-big is-text-dark">
            A game in developement
          </h2>

          <div>
            <a
              style="margin-top: 1rem;"
              href="#taw-4"
              class="button taw-primary"
              >Follow</a
            >
          </div>
          <p class="is-text-gray-dark">Scroll for more info</p>
          <img src="~/assets/images/taw/mouse-scroll.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="taw-2" class="section is-flex fullheight">
      <img
        class="decorative mobile-hidden"
        style="width: 10rem; top: 20rem; left: 15%;"
        src="~/assets/images/taw/spritesheet1.png"
        alt=""
      />
      <img
        class="decorative mobile-hidden"
        style="width: 10rem; bottom: 15rem; right: 12%;"
        src="~/assets/images/taw/spritesheet2.png"
        alt=""
      />
      <div class="container is-relative">
        <div
          style="text-align: center;"
          class="cols align-center justify-center"
        >
          <div class="col full is-text-dark align-center justify-center">
            <h3 class="title is-small">Just take a walk</h3>
            <p class="is-text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              tenetur illum earum itaque inventore neque reprehenderit. Animi
              porro fugit, laudantium unde vel ullam, iure ratione eos at
              tempora mollitia soluta?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="taw-3" class="section fullheight">
      <img
        class="decorative mobile-hidden"
        style="width: 10rem; top: -15rem; left: 25%;"
        src="~/assets/images/taw/fallingplatform.png"
        alt=""
      />
      <img
        class="decorative mobile-hidden"
        style="width: 10rem; top: 5rem; left: 12%;"
        src="~/assets/images/taw/spritesheet3.png"
        alt=""
      />
      <div class="container is-relative">
        <div class="cols justify-center align-center">
          <div class="col third is-text-dark">
            <figure class="image-wrapper">
              <img
                class="is-thumbnail"
                src="~/assets/images/taw/game-screen1.jpg"
                alt="game screenshot"
              />
            </figure>
            <h3 class="subtitle is-medium spaced">Explore</h3>
            <p class="is-marginless">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              tenetur illum earum itaque inventore neque reprehenderit. Animi
              porro fugit, laudantium unde vel ullam, iure ratione eos at
              tempora mollitia soluta?
            </p>
          </div>
          <div class="col third is-text-dark">
            <figure class="image-wrapper">
              <img
                class="is-thumbnail"
                src="~/assets/images/taw/game-screen2.jpg"
                alt="game screenshot"
              />
            </figure>
            <h3 class="subtitle is-medium spaced">Puzzles</h3>
            <p class="is-marginless">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              tenetur illum earum itaque inventore neque reprehenderit. Animi
              porro fugit, laudantium unde vel ullam, iure ratione eos at
              tempora mollitia soluta?
            </p>
          </div>
          <div class="col third is-text-dark">
            <figure class="image-wrapper">
              <img
                class="is-thumbnail"
                src="~/assets/images/taw/game-screen3.jpg"
                alt="game screenshot"
              />
            </figure>
            <h3 class="subtitle is-medium spaced">Story</h3>
            <p class="is-marginless">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              tenetur illum earum itaque inventore neque reprehenderit. Animi
              porro fugit, laudantium unde vel ullam, iure ratione eos at
              tempora mollitia soluta?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      style="min-height: 60vh;"
      id="taw-4"
      class="section jumbo justify-center"
    >
      <!-- <div
        style="top: 0; left: 15%; width: 20rem;"
        class="decorative mobile-hidden is-flex"
      >
        <img
          style="width: 10rem; left: 50%; top: 50%; position: absolute;"
          src="~/assets/images/taw/bus01.png"
          alt=""
        />
        <img
          style="width: 10rem; left: 50%; top: 25%; position: absolute;"
          src="~/assets/images/taw/wing01.png"
          alt=""
        />
        <img
          style="width: 10rem; left: 50%; top: 25%; position: absolute;"
          src="~/assets/images/taw/wing02.png"
          alt=""
        />
      </div> -->
      <img
        id="bus"
        class="decorative mobile-hidden"
        style="width: 15rem;"
        src="~/assets/images/taw/bus_complete.png"
        alt=""
      />
      <div class="jumbo-content is-text-gray-dark">
        <h1 class="title is-medium is-text-gray-dark">Take a walk</h1>
        <h2 class="subtitle is-small is-text-gray-dark italic">
          In developement by Miccielly
        </h2>
        <div class="link-row">
          <a
            class="is-text-dark"
            href="https://www.twitch.tv/miccielly"
            title="Twitch.tv"
            target="blank"
            ><IconifyIcon height="40" :icon="icons.bxlTwitch"
          /></a>

          <a
            class="is-text-dark"
            target="blank"
            title="Instagram"
            href="https://www.instagram.com/takeawalkgame/"
            ><IconifyIcon height="40" :icon="icons.bxlInstagram"
          /></a>

          <a class="is-text-dark" href="" title="Google Play"
            ><IconifyIcon height="40" :icon="icons.bxlPlayStore"
          /></a>
        </div>
        <p class="is-text-gray-dark is-marginless">Follow to stay informed!</p>
      </div>
    </section>
    <section style="height: 75vh;" id="taw-5" class="section"></section>
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue"
import bxlTwitch from "@iconify/icons-bx/bxl-twitch"
import bxlInstagram from "@iconify/icons-bx/bxl-instagram"
import bxlPlayStore from "@iconify/icons-bx/bxl-play-store"
export default {
  components: {
    IconifyIcon,
  },
  data() {
    return {
      icons: {
        bxlTwitch,
        bxlInstagram,
        bxlPlayStore,
      },
    }
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
  background-color: $gray-lighter;
  color: $gray-dark;
}
#taw-2 {
  // height: 150vh;
  background: url("~assets/images/taw/bg04.png") center 15vh / 100% 80%
      no-repeat,
    url("~assets/images/taw/bg05dark.png") center top / 100% 70% no-repeat;
}
#taw-3 {
  // .cols {
  //   padding: 30rem 0 40rem;
  //   @include break($tablet) {
  //     padding: initial;
  //   }
  // }
  // height: 150vh;

  &:before {
    content: "";
    position: relative;
    top: -5rem;
    width: 100%;
    height: 10rem;
    background: url("~assets/images/taw/bg03topt.png") center / 100% 80%
      no-repeat;
  }
  &:after {
    content: "";
    position: relative;
    bottom: -5rem;
    width: 100%;
    height: 10rem;
    z-index: 3;
    background: url("~assets/images/taw/bg03bottomt.png") center / 100% 80%
      no-repeat;
  }
  // background: url("~assets/images/taw/bg03pattern.png") center center / contain
  //   repeat;
  background: url("~assets/images/taw/bg03pattern.png") left top / 100% repeat,
    linear-gradient(90deg, #eceef8, #fdfeff);
  background-blend-mode: saturation;
  z-index: 1;
  margin: 5rem 0;
  // @include break($desktop) {
  //   background: url("~assets/images/taw/bg03.png") center 70% / 100% 90%
  //       no-repeat,
  //     url("~assets/images/taw/boardsign.png") right 18% top 0 / 20% no-repeat;
  // }
  // url("~assets/images/taw/bg05dark.png") center top / 100% 70vh no-repeat;
}
#taw-4 {
  #bus {
    top: 0;
    left: 10%;
    @include break($widescreen) {
      left: 15%;
    }
  }
  .jumbo-content {
    padding: 8rem 0;
    background: url("~assets/images/taw/boardsign_paper.png") center / contain
      no-repeat;
    @include break($tablet) {
      padding: 8rem;
    }
  }
}
#taw-5 {
  // height: 150vh;
  background: url("~assets/images/taw/sanctuary_mountain01-dark.png") center
      bottom / 100% 70% no-repeat,
    url("~assets/images/taw/checkpoint.png") right 15% bottom -10% / 15% 40% no-repeat,
    url("~assets/images/taw/bg05dark2.png") center bottom / 100% 40% no-repeat;
  @include break($tablet) {
    background: url("~assets/images/taw/sanctuary_mountain01-dark.png") center
        bottom / 80% 80% no-repeat,
      url("~assets/images/taw/checkpoint.png") right 15% bottom -10% / 12% 40% no-repeat,
      url("~assets/images/taw/bg05dark2.png") center bottom / 100% 40% no-repeat;
  }
  @include break($desktop) {
    background: url("~assets/images/taw/sanctuary_mountain01-dark.png") center
        bottom / 80% 90% no-repeat,
      url("~assets/images/taw/checkpoint.png") right 15% bottom -10% / 12% 40% no-repeat,
      url("~assets/images/taw/bg05dark2.png") center bottom / 100% 40% no-repeat;
  }
  @include break($widescreen) {
    background: url("~assets/images/taw/sanctuary_mountain01-dark.png") center
        bottom / 75% 100% no-repeat,
      url("~assets/images/taw/checkpoint.png") right 15% bottom -10% / 10% 40% no-repeat,
      url("~assets/images/taw/bg05dark2.png") center bottom / 100% 40% no-repeat;
  }

  // url("~assets/images/taw/bg05dark.png") center top / 100% 70vh no-repeat;
}
</style>
