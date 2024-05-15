<template>
  <Page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          to="/questions"
          label="Questions"
        ></page-header-btn-back>
      </template>
      <template #title> Answer </template>
    </page-header>

    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md text-center">This is Answer Page</div>

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
  name: "Answer",
});
</script>
