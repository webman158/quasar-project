<template>
  <Page>
    <page-header>
      <template #title> Home </template>
    </page-header>

    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md text-center">IOS Transition Page</div>

        <q-btn
          to="/home/child"
          label="Go To Child Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <q-btn
          to="/questions/answer"
          label="Go To Question/Answer Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

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
defineOptions({
  name: "Home",
});
</script>
