<template>
  <div id="app">
    <section class="hero is-fullheight">
      <Sidebar />
      <div class="hero-body">
        <div class="container">
          <Nuxt />
        </div>
      </div>
      <Footer />
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Footer from "~/components/Footer.vue";
import Sidebar from "~/components/Sidebar.vue";
export default Vue.extend({
  components: {
    Footer,
    Sidebar,
  },
});
</script>