import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

createApp(App).mount("#app");

const app = createApp();
app.config.productionTip = false;
app.use(Antd);
