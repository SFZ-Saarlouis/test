<template>
  <b-field>
    <p>
      Was ist 1+1? Welches Jahr haben wir?
      <b-input
        rounded
        type="number"
        size="is-medium"
        placeholder="1+1"
        v-model="input.addition"
      >
      </b-input>
      <b-input
        rounded
        type="number"
        size="is-medium"
        placeholder="Jahr"
        v-model="input.year"
      >
      </b-input></p
  ></b-field>
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
      messages: this.$readFromStorage(this.name + "-messages", {
        answer: "",
        solution: "",
      }),
    };
  },
  watch: {
    messages: {
      deep: true,
      handler() {
        this.$writeToStorage(this.name + "-messages", this.messages);
      },
    },
    input: {
      deep: true,
      handler() {
        this.$writeToStorage(this.name + "-input", this.input);
        this.messages.answer =
          this.$transformUndefined(this.input.addition) +
          ", " +
          this.$transformUndefined(this.input.year);
      },
    },
    solution: {
      deep: true,
      immediate: true,
      handler() {
        if (Object.keys(this.solution).length === 0) {
          return;
        }
        this.messages.solution =
          this.solution.addition + " ," + this.solution.year;
        this.messages.question = "Was ist 1+1? Welches Jahr haben wir?";
        this.$writeToStorage(this.name + "-solution", this.solution);
      },
    },
  },
  created() {
    this.solution = {
      addition: "2",
      year: "2021",
    };
    this.$nuxt.$on("nextPage", (name: string) => {
      if (name !== this.name) {
        return;
      }
      //TODO: check excercise
    });
  },
});
</script>