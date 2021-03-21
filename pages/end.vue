<template>
  <content>
    <section id="hero-background" class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Wenn du keine Änderungen mehr vornehmen möchtest und deine Lösungen
            abgeben möchtest klicke auf Abgeben
          </h1>
          <p class="subtitle">
            Du kannst mit dem Zurück-Button nochmal zurück gehen und deine
            Antworten überprüfen.
          </p>
          <p>
            <b-button
              class="is-vcentered"
              label="Abgeben"
              type="is-link"
              @click="submit"
            >
            </b-button>
            <b-button
              class="is-vcentered"
              label="Zurück"
              tag="nuxt-link"
              :to="firstPage"
              type="is-link"
            >
            </b-button>
            <br />
            <br />
          </p>

          <p>
            <img style="zoom: 0.5" src="~/assets/finished.svg" />
          </p>
        </div>
      </div>
    </section>
  </content>
</template>
<script lang="ts">
import Vue from "vue";
import data from "~/assets/data.json";
import grades from "~/assets/grades.json";
import { jsPDF } from "jspdf";

export default Vue.extend({
  data() {
    return {
      y: 10,
    };
  },
  methods: {
    submit(): void {
      const student = this.$readFromStorage("student", {});
      const doc = new jsPDF();
      this.addText(
        doc,
        `${student.firstName} ${student.lastName} ${student.school} ${student.schoolClass}`
      );
      this.y += 10;
      let sum = 0;
      let issues = 0;
      let index = 1;
      data.forEach((item) => {
        //https://stackoverflow.com/questions/8572826/generic-deep-diff-between-two-objects
        let o1 = this.$readFromStorage(item.name + "-input", {});
        let o2 = this.$readFromStorage(item.name + "-solution", {});
        let messages = this.$readFromStorage(item.name + "-messages", {});
        let diff = Object.keys(o2).reduce((diff, key) => {
          if (o1[key] === o2[key]) return diff;
          return {
            ...diff,
            [key]: o2[key],
          };
        }, {});
        issues += Object.keys(diff).length;
        sum += Object.keys(o2).length;
        this.addText(doc, "Aufgabe " + index + ":");
        this.addText(doc, "Frage: " + messages.question);
        this.addText(doc, "Lösung: " + messages.solution);
        this.addText(doc, "Deine Antwort: " + messages.answer);
        this.y += 10;
        index++;
      });
      const achieved = sum - issues;
      const percent = Math.floor((achieved / sum) * 100);

      let grade = 15;
      for (var i = grades.length - 1; i >= 0; i--) {
        if (percent >= grades[i].min) {
          grade = grades[i].grade;
          break;
        }
      }

      this.addText(
        doc,
        `Gesamtpunkte: ${achieved} von ${sum} (${percent}%) Note: ${grade}`
      );

      //doc.save(student.firstName + ".pdf");
      doc.output("dataurlnewwindow");
    },
    addText(doc: jsPDF, text: string): void {
      const pageHeigh = doc.internal.pageSize.height;
      if (this.y >= pageHeigh) {
        doc.addPage();
        this.y = 10;
      }
      doc.text(text, 10, this.y);
      this.y += 10;
    },
  },
  computed: {
    firstPage(): string {
      return "/" + data[0].name;
    },
  },
});
</script>