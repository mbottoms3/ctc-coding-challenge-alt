<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center q-mt-md">
      <div class="col-xs-12 col-md-7">
        <q-card flat class="q-py-md q-px-sm">
          <div class="row justify-center">
            <div class="text-h6">Login To Your Account</div>
          </div>
          <div class="row justify-center">
            <div class="col-xs-12 col-md-4">
              <q-input
                class="q-my-sm"
                rounded
                bg-color="white"
                outlined
                dense
                v-model="email"
                label="Email"
              />
              <q-input
                class="q-my-sm"
                rounded
                bg-color="white"
                outlined
                dense
                v-model="password"
                label="Password"
              />

              <q-btn rounded no-caps color="primary" label="Login" />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");

    const submit = () => {
      console.log("submit");
    };
    return {
      submit,

      email,
      password,
    };
  },
};
</script>
