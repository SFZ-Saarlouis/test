<template>
  <content>
    <section class="hero">
      <div class="hero-body has-text-centered">
        <div class="login">
          <b-image
            :src="require('~/assets/NavbarLogo.webp')"
            :webp-fallback="require('~/assets/NavbarLogo.png')"
            style="padding-bottom: 10px"
            alt="Schülerforschungszentrum Saarlouis"
          />
          <p class="title">GLN {{ title }}</p>
          <form>
            <b-field>
              <b-input
                rounded
                size="is-medium"
                placeholder="Name"
                v-model="student.firstName"
              >
              </b-input>
            </b-field>
            <b-field>
              <b-input
                rounded
                size="is-medium"
                placeholder="Nachname"
                v-model="student.lastName"
              >
              </b-input>
            </b-field>
            <b-field>
              <b-input
                rounded
                size="is-medium"
                placeholder="Klasse"
                v-model="student.schoolClass"
              >
              </b-input>
            </b-field>
            <b-field>
              <b-input
                rounded
                size="is-medium"
                placeholder="Schule"
                v-model="student.school"
              >
              </b-input>
            </b-field>

            <b-tooltip
              label="Deine Eingaben sind nicht vollständig"
              position="is-bottom"
              :active="!isValid"
            >
              <b-button
                rounded
                expanded
                type="is-primary"
                size="is-medium"
                @click="startTest"
              >
                Daten bestätigen &#38; Test starten
              </b-button>
            </b-tooltip>
          </form>
        </div>
      </div>
    </section>
  </content>
</template>
<script lang="ts">
import Vue from "vue";
import data from "~/assets/data.json";
export default Vue.extend({
  data() {
    return {
      title: process.env.testName,
      student: this.$readFromStorage("student", {})
    };
  },
  methods: {
    startTest(): void {
      if (!this.isValid) {
        return;
      }
      this.$writeToStorage("student", this.student);
      this.$router.push({ path: data[0].name})
    },
    isEmpty(str: string): boolean {
      return !str || 0 === str.length;
    },
  },
  computed: {
    isValid() {
      if (
        this.isEmpty(this.student.firstName) ||
        this.isEmpty(this.student.lastName) ||
        this.isEmpty(this.student.school) ||
        this.isEmpty(this.student.schoolClass)
      ) {
        return false;
      }
      return true;
    },
  },
});
</script>

<style>
.hero-body {
  justify-content: center;
}

.login {
  border-radius: 25px;
  background-color: white;
  padding: 1.5rem;
}
</style>