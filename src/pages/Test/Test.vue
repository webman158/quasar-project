<template>
  <Page>
    <page-header>
      <template #title> Test </template>
    </page-header>

    <page-body>
      <div class="q-pa-md">
        <q-knob
          show-value
          font-size="16px"
          class="text-red q-ma-md"
          v-model="value"
          size="60px"
          :thickness="0.05"
          color="red"
          track-color="grey-3"
        >
          <q-icon name="volume_up" class="q-mr-xs" />
          {{ value }}
        </q-knob>
      </div>
    </page-body>
  </Page>
</template>

<script setup>
import { ref } from "vue";

const value = ref(81);
</script>

<style lang="scss" scoped></style>
