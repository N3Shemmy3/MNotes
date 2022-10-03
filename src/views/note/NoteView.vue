<template>
  <v-container v-scroll fluid>
    <v-text-field label="Note Title" type="text"></v-text-field>
    <v-textarea class="mt-1" label="Note TextArea" auto-grow></v-textarea>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const dialog = ref(false);
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
