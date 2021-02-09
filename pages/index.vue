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
              <b-input rounded size="is-medium" placeholder="Name"> </b-input>
            </b-field>
            <b-field>
              <b-input rounded size="is-medium" placeholder="Nachname">
              </b-input>
            </b-field>
            <b-field>
              <b-input rounded size="is-medium" placeholder="Klasse"> </b-input>
            </b-field>
            <b-field>
              <b-input rounded size="is-medium" placeholder="Schule"> </b-input>
            </b-field>
            <b-button
              rounded
              expanded
              native-type="submit"
              type="is-primary"
              size="is-medium"
            >
              Starten
            </b-button>
          </form>
        </div>
      </div>
    </section>
  </content>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: process.env.testName,
    };
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