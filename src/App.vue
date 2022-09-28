<template>
  <v-app id="MNotes">
    <v-navigation-drawer v-model="drawer" width="320" app>
      <v-list nav>
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar
              size="default"
              icon="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-avatar>
          </template>

          <v-list-item-title class="text-subtitle-1">Shemmy3</v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2">
            shemmynyirenda3@gmailcom
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list class="pr-3">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :active="i == 0"
          active-color="primary"
          class="rounded-e-xl pl-3 mb-1"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title
            class="text-subtitle-1"
            v-text="item.text"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="router.currentRoute.value.name == 'home'"
          class="d-lg-none"
          @click="toggleDrawer()"
        />
        <v-btn v-else icon @click="goBack()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>

      <v-toolbar-title>
        MNotes
        <!--

          <v-text-field
          with="500"
          :loading="loading"
          variant="solo"
          label="Search notes"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="toggleTheme()"
        ></v-text-field>
      -->
      </v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="toggleTheme()">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
      <NoteView :visibility="showNotesDialog"></NoteView>
    </v-main>
    <v-btn
      icon="mdi-pencil-outline"
      color="secondary"
      class="fab"
      size="large"
      @click="showNotesDialog = !showNotesDialog"
    />
  </v-app>
</template>
<style>
.fab {
  position: fixed;
  margin: 12px;
  bottom: 0px;
  right: 0px;
}
</style>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTheme } from "vuetify";
import router from "./router";
import NoteView from "./views/noteview/NoteView.vue";

const theme = useTheme();

var drawer = ref(null);
const showNotesDialog = ref(false);

let items = ref([
  {
    text: "Notes",
    icon: "mdi-lightbulb-outline",
  },
  {
    text: "Trash",
    icon: "mdi-trash-can-outline",
  },
  {
    text: "Settings",
    icon: "mdi-cog-outline",
  },
]);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "LightTheme"
    : "DarkTheme";
}

function goBack() {
  console.log(router.getRoutes.length);
  router.back();
}

function toggleDrawer() {
  drawer.value = !drawer.value;
}
router.afterEach((to, from, failure) => {
  if (to.name == null) document.title = "MNotes";
  else document.title = to.name.toString();
});
onMounted(() => {
  console.log(this);
  document.title = "MNotes";
});
</script>
