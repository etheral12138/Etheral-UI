import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import etheralui from "etheral-ui";
import { Button } from "etheral-ui";
app.use(etheralui);
app.use(Button);
console.log(etheralui);

app.mount("#app");
