<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
        no-caps
      >
        <q-route-tab label="Home" icon="las la-home" to="/" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});
</script>
