<template>
  <Page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          to="/home/child"
          label="Child"
        ></page-header-btn-back>
      </template>
      <template #title> GrandChild </template>
    </page-header>

    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md text-center">This is GrandChild Page</div>

        <div class="q-gutter-sm q-mb-md">
          <q-radio v-model="shape" val="line" label="Line" />
          <q-radio v-model="shape" val="rectangle" label="Rectangle" />
          <q-radio v-model="shape" val="ellipse" label="Ellipse" />
        </div>

        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius earum
          voluptates vel excepturi est nobis distinctio esse natus saepe harum
          ut nostrum quaerat qui, minus similique non id nulla. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab eius earum voluptates
          vel excepturi est nobis distinctio esse natus saepe harum ut nostrum
          quaerat qui, minus similique non id nulla. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab eius earum voluptates vel excepturi
          est nobis distinctio esse natus saepe harum ut nostrum quaerat qui,
          minus similique non id nulla.
        </p>
      </div>
    </page-body>
  </Page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "Child",
});

const shape = ref("line");
</script>
