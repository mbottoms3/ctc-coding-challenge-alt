import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: "http://127.0.0.1:8000" });
console.log(api.defaults);
api.defaults.withCredentials = true;
api.defaults.withXSRFToken = true;

export default boot(({ app }) => {
  app.provide("$api", api);
});

export { api };
