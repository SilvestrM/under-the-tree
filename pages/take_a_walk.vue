<template>
  <div class="wrapper">
    <section id="taw-1" class="section fullheight jumbo">
      <div class="jumbo-content">
        <!-- <div class="image-wrapper">
          <img style="width: 40rem;" src="~/assets/images/taw/logo.png" alt />      
        </div> -->
        <div class="heading">
          <h1 class="title is-big is-text-dark">{{ $t("taw.gameName") }}</h1>
          <span class="status text-uppercase is-text-bold is-text-gray-dark">{{
            $t("taw.status")
          }}</span>
        </div>
        <div class="embed-video-container">
          <iframe
            rel="preload"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/ZWf-k6pMtMY?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div
          style="flex-direction: column; margin-top: 1.5rem;"
          class="is-relative is-flex align-center"
        >
          <!-- <h2 class="subtitle is-big is-text-dark">
            A game in developement
          </h2> -->

          <div>
            <a
              style="margin-top: 1rem;"
              href=""
              @click.prevent="scrollTo('taw-4')"
              class="button taw-primary"
              >{{ $t("taw.ctoa") }}</a
            >
          </div>
          <p class="is-text-gray-dark">{{ $t("taw.scrollIst") }}</p>
          <img
            style="margin-top: 1rem;"
            id="mousescroll-icon"
            src="~/assets/images/taw/mouse-scroll.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="taw-2" class="section is-flex justify-center fullheight">
      <div id="taw-2-upperbcg"></div>
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
      <div id="taw-2-1">
        <div class="container is-relative">
          <div
            style="text-align: center;"
            class="cols align-center justify-center"
          >
            <div class="col full is-text-dark align-center justify-center">
              <h3 class="subtitle is-big">{{ $t("taw.desc.title") }}</h3>
              <p class="is-text-dark">
                {{ $t("taw.desc.text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section style="height: 20vh;"></section> -->
    <section id="taw-3" class="section fullheight">
      <img
        class="decorative mobile-hidden"
        style="width: 15rem; top: -10rem; right: 20%;"
        src="~/assets/images/taw/boardsign.png"
        alt=""
      />
      <img
        id="fallingPlatform"
        class="decorative mobile-hidden"
        style="width: 10rem; top: -15rem; left: 25%;"
        src="~/assets/images/taw/fallingplatform.png"
        alt=""
      />
      <img
        id="sitting-man-dec"
        class="decorative mobile-hidden"
        style="width: 10rem; top: 5rem; left: 12%;"
        src="~/assets/images/taw/spritesheet3.png"
        alt=""
      />
      <div class="container is-relative">
        <div
          id="features-title"
          style="text-align: center;"
          class="cols align-center justify-center"
        >
          <div
            style="margin-bottom: 3rem;"
            class="col full is-text-dark align-center"
          >
            <h3 class="title is-medium">
              {{ $t("taw.featuresTitle") }}
            </h3>
            <!-- <p class="is-text-dark">
              {{ $t("taw.featuresText") }}
            </p> -->
          </div>
        </div>
        <div id="staggered-cols" class="grid-cols is-m-center">
          <div class="col third is-text-dark stag-anim">
            <figure class="image-wrapper">
              <video autoplay loop muted playsinline>
                <source
                  src="~/assets/videos/taw/rsz_jump.mp4"
                  type="video/mp4"
                />
                <img
                  class="is-thumbnail"
                  src="~/assets/images/taw/game-screen1.jpg"
                  alt="game screenshot"
                />
              </video>
            </figure>
            <h3 class="subtitle is-medium spaced">
              {{ $t("taw.feature1.name") }}
            </h3>
            <p class="is-marginless">
              {{ $t("taw.feature1.desc") }}
            </p>
          </div>
          <div class="col third is-text-dark stag-anim">
            <figure class="image-wrapper">
              <video autoplay loop muted playsinline>
                <source
                  src="~/assets/videos/taw/rsz_puzzle.mp4"
                  type="video/mp4"
                />
                <img
                  class="is-thumbnail"
                  src="~/assets/images/taw/game-screen2.jpg"
                  alt="game screenshot"
                />
              </video>
            </figure>
            <h3 class="subtitle is-medium spaced">
              {{ $t("taw.feature2.name") }}
            </h3>
            <p class="is-marginless">
              {{ $t("taw.feature2.desc") }}
            </p>
          </div>
          <div class="col third is-text-dark stag-anim">
            <figure class="image-wrapper">
              <video autoplay loop muted playsinline>
                <source
                  src="~/assets/videos/taw/rsz_story.mp4"
                  type="video/mp4"
                />
                <img
                  class="is-thumbnail"
                  src="~/assets/images/taw/game-screen3.jpg"
                  alt="game screenshot"
                />
              </video>
            </figure>
            <h3 class="subtitle is-medium spaced">
              {{ $t("taw.feature3.name") }}
            </h3>
            <p class="is-marginless">
              {{ $t("taw.feature3.desc") }}
            </p>
          </div>
        </div>
        <hr />
        <div
          style="text-align: center;"
          class="cols align-center justify-center"
        >
          <div class="col full is-text-dark align-center">
            <p style="font-size: 1.8em;" class="is-text-dark">
              {{ $t("taw.featuresText") }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      style="min-height: 95vh;"
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
        <!-- <h1 class="title is-medium is-text-gray-dark">
          {{ $t("taw.gameName") }}
        </h1> -->
        <p class="is-text-gray-dark text-center is-marginless">
          {{ $t("taw.linksBox.status") }}
        </p>
        <h2
          class="subtitle is-small is-text-gray-dark"
          style="margin-bottom: 1.5rem; margin-top: 0.5rem;"
        >
          {{ $t("taw.linksBox.ctoaText") }}
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
            href="https://www.instagram.com/micciellythealchemist/"
            ><IconifyIcon height="40" :icon="icons.bxlInstagram"
          /></a>

          <a class="is-text-dark" href="" title="Google Play"
            ><IconifyIcon height="40" :icon="icons.bxlPlayStore"
          /></a>
        </div>
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

import { Draggable } from "gsap/Draggable.js"

export default {
  components: {
    IconifyIcon,
  },
  data() {
    return {
      loading: true,
      icons: {
        bxlTwitch,
        bxlInstagram,
        bxlPlayStore,
      },
    }
  },
  methods: {
    scrollTo(destination) {
      this.$gsap.to(window, {
        duration: 1.5,
        ease: "expo",
        scrollTo: {
          y: "#" + destination,
          offsetY: 70,
        },
      })
    },
  },
  mounted() {
    this.$gsap.registerPlugin(Draggable)

    /**
    Section 1 mousecroll icon animation
     */

    const mouseIconScaling = this.$gsap.to("#mousescroll-icon", {
      duration: 0.86,
      scale: 1.1,
      yoyo: true,
      repeat: -1,
    })
    mouseIconScaling.play()
    this.$ScrollTrigger.create({
      trigger: "#mousescroll-icon",
      start: "top center",
      // end: "bottom bottom",
      // once: true,
      onToggle: ({ isActive }) => {
        if (isActive) {
          mouseIconScaling.pause()
        } else {
          mouseIconScaling.resume()
        }
      },
    })

    this.$gsap.to("#taw-1", {
      duration: 3,
      scrollTrigger: {
        trigger: "#taw-1",
        start: "center top",
        scrub: 1,
      },
      opacity: 0,
    })

    /**
    section 2 parallax animation
    */

    this.$gsap.set("#taw-2", {
      backgroundPosition: "center top",
      opacity: 0,
    })
    this.$gsap.to("#taw-2", {
      duration: 2,
      scrollTrigger: {
        trigger: "#taw-2",
        start: "top bottom",
        end: "center center",
        scrub: 0.5,
      },
      opacity: 1,
    })

    this.$gsap.to("#taw-2", {
      duration: 3,
      scrollTrigger: {
        trigger: "#taw-2",
        start: "center bottom",
        scrub: 0.5,
      },
      backgroundPosition: "center 100%",
    })

    /**
     * section 3
     * **/

    Draggable.create("#fallingPlatform", {
      type: "x,y",
      bounds: { maxY: 500, minY: -500 },
    })

    // sitting man
    this.$gsap.fromTo(
      "#sitting-man-dec",
      {
        opacity: 0,
      },
      {
        ease: "sine",
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#taw-3",
          start: "center bottom",
          end: "center center",
        },
      }
    )
    // features title
    this.$gsap.fromTo(
      "#features-title h3",
      {
        scale: 0.8,
        opacity: 0.1,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power3",
        scale: 1,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "#taw-3",
          start: "top bottom",
          end: "center center",
        },
      }
    )

    // features videos
    const featureVideos = this.$el.querySelectorAll("video")

    featureVideos.forEach((v) => v.pause())

    const featuresTimeline = this.$gsap.timeline({
      scrollTrigger: {
        trigger: "#taw-3",
        start: "center bottom",
        end: "center top",
        once: true,
        onEnter: () => {
          featureVideos.forEach((v) => v.play())
        },
      },
    })

    featuresTimeline.fromTo(
      "#staggered-cols .col",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3",
        scale: 1,
        stagger: { each: 0.1, grid: "auto" },
      }
    )

    featuresTimeline.fromTo(
      "#staggered-cols h3, #staggered-cols p",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        delay: -0.6,
        ease: "sine",
        scale: 1,
        stagger: { each: 0.1, grid: "auto" },
      }
    )

    /**
     * Section 4
     */

    // Scroll-in opacity
    this.$gsap.set("#taw-4", {
      opacity: 0,
    })
    this.$gsap.to("#taw-4", {
      duration: 2,
      scrollTrigger: {
        trigger: "#taw-4",
        start: "top bottom",
        end: "center center",
        scrub: 0.5,
      },
      opacity: 1,
    })

    /**
     * Section 5
     */

    // scroll-in opacity
    this.$gsap.set("#taw-5", {
      opacity: 0,
    })
    this.$gsap.to("#taw-5", {
      duration: 2,
      scrollTrigger: {
        trigger: "#taw-4",
        start: "80% bottom",
        end: "center center",
        scrub: 0.5,
      },
      opacity: 1,
    })

    // Bus animation
    this.$gsap.set("#bus", {
      transformOrigin: "50% 50%",
      zIndex: 1,
    })
    const flyAnimation = this.$gsap.to("#bus", {
      duration: 0.86,
      relative: true,
      translateY: "-=10",
      yoyo: true,
      repeat: -1,
    })

    const busFlightTimeline = this.$gsap.timeline({
      scrollTrigger: {
        trigger: "#taw-4",
        start: "center 60%",
        once: true,
        onLeaveBack: ({ isActive }) => {
          if (isActive) busFlightTimeline.pause()
        },
        onEnter: ({ isActive }) => {
          if (isActive) busFlightTimeline.resume()
        },
      },
      onStart() {
        flyAnimation.kill()
      },
    })
    // busFlightTimeline.to("#bus", {
    //   duration: 0.86,
    //   relative: true,
    //   translateY: "-=10",
    //   yoyo: true,
    //   repeat: 1,
    // })

    busFlightTimeline.to("#bus", {
      duration: 3,
      ease: "power1",
      scale: 0.8,
      // immediateRender: true,
      motionPath: {
        // relative: true,
        alignOrigin: [0.5, 0.5],
        curviness: 2,
        // type: "cubic",
        path: [
          { x: 0, y: 0 },
          {
            x: window.innerWidth * 0.7,
            y: this.$el.querySelector("#taw-4").clientHeight * 0.05,
          },
        ],
        // align: "#bus-path",
      },
    })
    busFlightTimeline.to("#bus", {
      delay: -1,
      duration: 1,
      ease: "slow",
      // immediateRender: true,
      keyframes: [
        { rotationY: -180, duration: 0.8 },
        { rotationZ: -20, delay: -0.25 },
      ],
    })
    busFlightTimeline.to("#bus", {
      delay: -0.5,
      duration: 2,
      scale: 1,
      ease: "sine",
      // immediateRender: true,
      motionPath: {
        // relative: true,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
        // type: "cubic",
        path: [
          {
            x: window.innerWidth * 0.7,
            y: this.$el.querySelector("#taw-4").clientHeight * 0.3,
          },
          {
            x: window.innerWidth * 0.6,
            y: this.$el.querySelector("#taw-4").clientHeight * 0.6,
          },
        ],
      },
    })
    busFlightTimeline.to("#bus", {
      duration: 0.86,
      relative: true,
      translateY: "-=10",
      yoyo: true,
      repeat: -1,
    })

    // const busFlight = this.$gsap.to("#bus", {
    //   scrollTrigger: {
    //     trigger: "#taw-4",
    //     start: "center 60%",
    //     once: true,
    //   },
    //   duration: 5,
    //   ease: "sine",
    //   // immediateRender: true,
    //   motionPath: {
    //     // relative: true,
    //     alignOrigin: [0.5, 0.5],
    //     curviness: 1.5,
    //     // type: "cubic",
    //     path: [
    //       { x: 0, y: 0 },
    //       { x: 800, y: 0, rotation: 180 },
    //       { x: 900, y: 400, rotation: 180, delay: 0.5 },
    //       { x: 800, y: 600 },
    //     ],
    //     // align: "#bus-path",
    //   },
    // })
    // console.log(busFlight)
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
  color: $gray-darker1;
  // background: url("~assets/images/taw/bg05dark.png") center bottom -40rem / 100%
}

.is-text-dark {
  color: $gray-darker1;
  &.title {
    color: $gray-darker;
  }
}

#taw-1 {
  .title.is-big {
    font-size: clamp(3rem, 4vw, 20rem);
    letter-spacing: 0.05em;
  }

  .jumbo-content {
    justify-content: flex-start;
    .heading {
      margin: $spacing2 0;
    }
  }
  p {
    margin: $spacing0;
  }
}

#taw-2 {
  #taw-2-upperbcg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("~assets/images/taw/bg04.png") center 60% / 100% 90%
      no-repeat;
  }
  #taw-2-1 {
    display: flex;
    flex-direction: column;
    // &:before {
    //   content: "";
    //   position: relative;
    //   top: -2rem;
    //   width: 100%;
    //   height: 50rem;
    //   background: url("~assets/images/taw/bg04top.png") center / 100% 80%
    //     no-repeat;
    // }
    // &:after {
    //   content: "";
    //   position: relative;
    //   bottom: -2rem;
    //   width: 100%;
    //   height: 50rem;
    //   z-index: 3;
    //   background: url("~assets/images/taw/bg04bottom.png") center / 100% 80%
    //     no-repeat;
    // }
    // background: url("~assets/images/taw/bg03pattern.png") left top / 100% repeat,
    //   linear-gradient(90deg, #eceef8, #fdfeff);
    // background-blend-mode: saturation;
    z-index: 1;
  }
  margin: 5rem 0 10rem;
  background: url("~assets/images/taw/bg05dark.png") center top / 100% 80%
    no-repeat;
}
#taw-3 {
  // .cols {
  //   padding: 30rem 0 40rem;
  //   @include break($tablet) {
  //     padding: initial;
  //   }
  // }
  // height: 150vh;

  hr {
    margin: 6rem 0 0.75rem;
    border-color: $gray-light;
    border-width: 0.5px;
  }

  .subtitle.is-medium {
    letter-spacing: 0.05em;
  }

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
    bottom: -6rem;
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
    left: 8%;
    @include break($widescreen) {
      left: 15%;
    }
  }
  #bus-path-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #bus-path {
    visibility: hidden;
  }

  .jumbo-content {
    padding: 8rem $spacing1;
    background: url("~assets/images/taw/boardsign_paper.png") center / contain
      no-repeat;
    > * {
      margin: $spacing0 0;
    }
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
