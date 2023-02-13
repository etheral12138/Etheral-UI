import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import {Icon} from "et-design";
app.use(Icon);
app.mount("#app");
