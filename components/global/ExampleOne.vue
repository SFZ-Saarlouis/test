<template>
  <b-field>
    <b-input
      rounded
      size="is-medium"
      placeholder="Schule"
      v-model="input.school"
    >
    </b-input>
    <b-input rounded size="is-medium" placeholder="abc" v-model="input.abc">
    </b-input>
    <b-button
      rounded
      expanded
      type="is-primary"
      size="is-medium"
      @click="clicked"
    >
      Daten bestätigen &#38; Test starten
    </b-button>
  </b-field>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    } as PropOptions<String>,
  },
  data() {
    return {
      input: this.$readFromStorage(this.name + "-input", {}),
      solution: this.$readFromStorage(this.name + "-solution", {}),
    };
  },
  watch: {
    input: {
      deep: true,
      handler() {
        this.$writeToStorage(this.name + "-input", this.input);
        this.$writeToStorage(this.name + "-solution", {
          school: "Schule",
          abc: "xyz",
        });
      },
    },
  },
  created() {
    this.$nuxt.$on("nextPage", (name: string) => {
      if (name !== this.name) {
        return;
      }
      //TODO: check excercise
    });
  },
});
</script>