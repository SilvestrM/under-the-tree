<template>
  <div style="grid-area: menu;" class="content">
    <h2>{{ $t("footer.contact") }}</h2>
    <p>{{ $t("contact.message") }}</p>
    <form action="https://formspree.io/f/mknkvqpj" method="POST">
      <div class="input-group">
        <label for="username">{{ $t("general.name") }}</label>
        <input v-model="name" type="text" name="username" id="username" />
      </div>
      <div class="input-group">
        <label for="email">{{ $t("general.email") }}</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="input-group">
        <label for="text">{{ $t("contact.messageAreaTitle") }}</label>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
      </div>
      <input type="hidden" name="_next" :value="localePath('/')" />
      <input
        type="hidden"
        name="_subject"
        :value="`${$t('homepage.siteName')} – ${name}`"
      />
      <button
        style="margin: 0 0 0 auto; display: block;"
        class="button"
        type="submit"
      >
        {{ $t("contact.send") }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "jumbo",
  data() {
    return {
      name: "",
    }
  },
}
</script>

<style lang="scss" scoped></style>
