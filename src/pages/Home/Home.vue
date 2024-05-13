<template>
  <Page>
    <page-header>
      <template #title> Hello </template>
    </page-header>

    <page-body>
      <div class="q-pa-lg">
        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius earum
          voluptates vel excepturi est nobis distinctio esse natus saepe harum
          ut nostrum quaerat qui, minus similique non id nulla.
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
