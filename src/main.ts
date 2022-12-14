import { createApp } from "vue";
import "vuetify/styles"; // Global CSS has to be imported
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify/vuetify";
import { loadFonts } from "./plugins/webfont/webfontloader";

loadFonts();

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
