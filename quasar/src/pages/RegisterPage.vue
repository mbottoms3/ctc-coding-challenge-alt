<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center q-mt-md">
      <div class="col-xs-12 col-md-7">
        <q-card flat class="q-py-md q-px-sm">
          <div class="row justify-center">
            <div class="text-h6">Register Your Account</div>
          </div>
          <div class="row justify-center">
            <div class="col-xs-12 col-md-4">
              <q-input
                class="q-my-sm"
                rounded
                outlined
                bg-color="white"
                dense
                label="Name"
                v-model="form.name"
              />
              <q-input
                class="q-my-sm"
                rounded
                bg-color="white"
                outlined
                dense
                v-model="form.email"
                label="Email"
              />
              <q-input
                class="q-my-sm"
                rounded
                bg-color="white"
                outlined
                dense
                v-model="form.password"
                label="Password"
              />
              <q-input
                class="q-my-sm"
                rounded
                bg-color="white"
                outlined
                dense
                v-model="form.password_confirmation"
                label="Confirm Password"
              />

              <q-btn
                @click="submit"
                rounded
                no-caps
                color="primary"
                label="Register"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, inject } from "vue";
// import { register } from "src/api";
// import axios from "src/boot/axios";
import axios from "axios";

export default {
  name: "RegisterPage",
  setup() {
    // const api = inject("$api");
    const form = ref({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const submit = async () => {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register",
        form.value
      );
      console.log(res);
    };

    return {
      submit,
      form,
    };
  },
};
</script>
