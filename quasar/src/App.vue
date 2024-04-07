<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  setup() {
    const axiosConfig = async () => {
      axios.defaults.baseURL = "http://127.0.0.1:8000";
      axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios.defaults.headers.common["Accept"] = "application/json";
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get("/sanctum/csrf-cookie");
      console.log(axios.defaults);
    };

    onMounted(() => {
      axiosConfig();
    });
  },
});
</script>
