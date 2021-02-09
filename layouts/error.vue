<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <div class="container">
            <h1 class="title is-size-1">
              {{ error.statusCode }}
            </h1>
            <h1 class="subtitle">
              {{ error.message }}
            </h1>
            <NuxtLink to="/"> Zurück zur Startseite </NuxtLink>
          </div>
        </div>
        <div class="column is-6">
          <img src="~/assets/undraw_processing.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { NuxtError } from "@nuxt/types";
export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: true,
    } as PropOptions<NuxtError>,
  },
  computed: {
    siteName(): string {
      return decodeURIComponent(window.location.pathname);
    },
  },
});
</script>