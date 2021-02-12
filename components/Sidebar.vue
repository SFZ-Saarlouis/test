<template>
  <section>
    <b-sidebar
      v-model="open"
      type="is-light"
      :fullheight="true"
      :overlay="true"
    >
      <div class="p-1">
        <img src="~/assets/completed_tasks.svg" />
        <br />
        <b-menu>
          <b-menu-list>
            <b-menu-item to="/" label="Deine Daten" tag="nuxt-link" />
            <b-menu-item
              v-for="(item, index) in pages"
              :key="item.name"
              :active="$route.params.name === item.name"
              :label="index + 1 + '. ' + item.name"
              :to="'/' + item.name"
              tag="nuxt-link"
            />
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import data from "~/assets/data.json";
export default Vue.extend({
  data() {
    return {
      open: false,
      pages: data,
    };
  },
  created() {
    this.$nuxt.$on("openOverview", () => {
      this.open = true;
    });
  },
});
</script>