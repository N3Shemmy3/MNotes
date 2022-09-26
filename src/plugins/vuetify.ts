// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#fafafa",
    "on-background": "#1a1c17",

    surface: "#fdfdf5",
    "on-surface": "#1a1c17",

    primary: "#376a1f",
    "on-primary": "#ffffff",
    "primary-darken-1": "#376a1f",

    secondary: "#386a1e",
    "on-secondary": "#ffffff",
    "secondary-darken-1": "#386a1e",

    error: "#B3261E",
    "on-error": "#ffffff",

    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    /** */
  },
};
const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#111111",
    "on-background": "#eeeeee",

    surface: "#1a1c17",
    "on-surface": "#e3e3dc",

    primary: "#9cd67e",
    "on-primary": "#0c3900",
    "primary-darken-1": "#9cd67e",

    secondary: "#9dd67d",
    "on-secondary": "#0e3900",
    "secondary-darken-1": "#9dd67d",

    error: "#F2B8B5",
    "on-error": "#601410",

    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    /** */
  },
};

const vuetify = createVuetify({
  defaults: {
    VSheet: {
      elevation: 2,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "LightTheme",
    themes: {
      LightTheme,
      DarkTheme,
    },
  },
});
export default vuetify;
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
