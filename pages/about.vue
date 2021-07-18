<template>
  <div style="grid-area: menu;" class="content">
    <h2>{{ $t("about.heading") }}</h2>
    <p>
      {{ $t("about.p1") }}
    </p>
    <h3>{{ $t("about.why") }}</h3>
    <p>
      {{ $t("about.p2") }}
    </p>
    <h3>{{ $t("about.members") }}</h3>
    <div class="cols-grid">
      <div>
        <a
          title="https://www.instagram.com/micciellythealchemist/"
          href="https://www.instagram.com/micciellythealchemist/"
        >
          <div class="image-wrapper">
            <img
              class="is-rounded is-thumbnail"
              src="~/assets/images/avatars/minialchemist.jpg"
              :alt="$t('people.mici.name') + 'logo'"
            />
          </div>
          <h4>{{ $t("people.mici.name") }}</h4>
        </a>
        <p class="desc">{{ $t("people.mici.desc") }}</p>
      </div>
      <div>
        <a href="http://mikeska.design" title="mikeska.design">
          <div class="image-wrapper">
            <img
              class="is-rounded is-thumbnail"
              src="~/assets/images/avatars/silvestr_logo.png"
              :alt="$t('people.silvi.name') + 'logo'"
            />
          </div>
          <h4>{{ $t("people.silvi.name") }}</h4>
        </a>
        <p class="desc">{{ $t("people.silvi.desc") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "jumbo",
}
</script>

<style lang="scss" scoped>
//moved to layout
// .content {
//   align-self: flex-start;
//   justify-self: center;
//   width: clamp(10rem, 100%, 125ch);
//   padding-bottom: 5rem;

//   @include break($mobile) {
//     align-self: center;
//   }

//   @include break($tablet) {
//     justify-self: flex-start;
//   }
// }

.cols-grid {
  padding-top: 1rem;
  display: grid;
  place-content: start;

  grid-template-columns: repeat(auto-fit, 10rem);

  grid-auto-columns: 10rem;
  grid-auto-rows: 1fr;
  gap: 1rem 2rem;
  text-align: center;
}

.image-wrapper {
  img.is-thumbnail {
    height: 10rem;
    width: 10rem;
    box-shadow: 0 0 0 2px $white-ish;
    transition: all $tspeed;
    filter: saturate(90%);
    &:hover {
      transition: all $tspeed;
      transform: scale(1.01);
    }
  }
}
.desc {
  font-size: 0.8em;
}

p,
h4 {
  margin: 0;
}
h2,
h3 {
  margin-bottom: 0.5rem;
}
h4 {
  margin-top: 0.5em;
}
h3 {
  margin-top: 3rem;
}

a:hover {
  color: currentColor;
}
</style>
