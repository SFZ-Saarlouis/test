<template>
  <component :is="component" :name="name"></component>
</template>
<script lang="ts">
import Vue from "vue";
import data from "~/assets/data.json";
export default Vue.extend({
  layout: "test",
  head() {
    return {
      title: this.$route.params.name,
    };
  },
  asyncData(context: any) {
    const found = data.filter(
      (item) => item.name.toLowerCase() === context.params.name.toLowerCase()
    );
    if (found.length === 0) {
      context.error({
        message: "Die Seite existiert nicht",
        statusCode: 404,
      });
      return;
    }
    const component = found[0].component;
    const name = found[0].name;
    return { component, name };
  },
});
</script>