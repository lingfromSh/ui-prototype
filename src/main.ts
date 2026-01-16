import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./assets/base.css";

createApp(App)
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount("#app");
