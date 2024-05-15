<template>
  <Page>
    <page-header>
      <template #title> Questions </template>
    </page-header>

    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md text-center">What is Your Question?</div>

        <q-list bordered separator>
          <q-item clickable v-ripple to="/questions/answer">
            <q-item-section> What is your Name?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/questions/answer">
            <q-item-section>Where Are you from?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/questions/answer">
            <q-item-section> What is your favorite color?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </page-body>
  </Page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "Questions",
});
</script>
