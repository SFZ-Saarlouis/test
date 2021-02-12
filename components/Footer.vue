<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed rounded is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active" @click="$nuxt.$emit('openOverview')">
            <a>Inhaltsverzeichnis</a>
          </li>
          <li v-if="!isLastPage" @click.prevent="nextPage">
            <a>Weiter</a>
          </li>
          <li>
            <NuxtLink v-if="isLastPage" to="/end">
              Zur Abschlussseite
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import data from "~/assets/data.json";

export default Vue.extend({
  methods: {
    nextPage(): void {
      const index = data
        .map((item) => item.name.toLowerCase())
        .indexOf(this.$route.params.name.toLowerCase());
      this.$nuxt.$emit("nextPage", data[index + 1].name);
      this.$router.push({ path: data[index + 1].name})
    },
  },
  computed: {
    isLastPage(): boolean {
      const bol =
        data.length - 1 ===
        data
          .map((item) => item.name.toLowerCase())
          .indexOf(this.$route.params.name.toLowerCase());
      return bol;
    },
  },
});
</script>