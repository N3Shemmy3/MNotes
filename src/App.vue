<template>
  <v-app id="MNotes">
    <v-navigation-drawer v-model="drawer" width="320" app>
      <v-list nav>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Shemmy3"
          subtitle="shemmynyirenda3@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="xl"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer()" />
      </template>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn icon @click="toggleTheme()">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
var drawer = ref(null);
let items = ref([
  { text: "Real-Time", icon: "mdi-clock" },
  { text: "Audience", icon: "mdi-account" },
  { text: "Conversions", icon: "mdi-flag" },
]);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "LightTheme"
    : "DarkTheme";
}

function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>
