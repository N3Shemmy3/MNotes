<template>
  <v-container>
    <v-list bg-color="background" lines="three">
      <v-list-item
        @click="$router.push('/about')"
        v-for="item in content"
        :key="item.title"
        :prepend-avatar="item.prependAvatar"
        :title="item.title"
        :subtitle="item.subtitle"
      >
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
const items = [
  { type: "subheader", title: "Today" },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
const content: (
  | {
      type: string;
      title: string;
      prependAvatar?: undefined;
      subtitle?: undefined;
      inset?: undefined;
    }
  | {
      prependAvatar: string;
      title: string;
      subtitle: string;
      type?: undefined;
      inset?: undefined;
    }
  | {
      type: string;
      inset: boolean;
      title?: undefined;
      prependAvatar?: undefined;
      subtitle?: undefined;
    }
)[] = [];

for (let index = 0; index < 20; index++) {
  content.push(items[1]);
}
</script>
