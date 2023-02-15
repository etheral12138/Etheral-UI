import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import { Button } from "et-design";
app.use(Button);
app.mount("#app");
