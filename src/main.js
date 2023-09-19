import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";

//import fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faClock,
  faMessage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faClock, faMessage, faXmark);

// import antdv
import { InputNumber, Modal, Button } from "ant-design-vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;
app.use(InputNumber);
app.use(Modal);
app.use(Button);

app.mount("#app");

// createApp(App).mount("#app");
