<template>
  <q-btn
    @click="useGoBack"
    no-caps
    icon="chevron_left"
    color="primary"
    rounded
    flat
    dense
  ></q-btn>
</template>

<script setup>
import { useGoBack } from "src/composables";
</script>

<style lang="scss" scoped></style>
