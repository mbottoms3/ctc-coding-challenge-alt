<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Welcome to the Coding Challenge App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
