<template>
  <Page>
    <page-header>
      <template #title> Images </template>
    </page-header>

    <page-body>
      <div class="q-pa-sm q-col-gutter-sm row items-start">
        <div class="col-6" v-for="item in pageStore.images" :key="item.id">
          <router-link :to="`/images/${item.id}`">
            <q-img :ratio="1" :src="item.url">
              <div class="absolute-bottom text-subtitle1 text-center">
                {{ item.title }}
              </div>
            </q-img>
          </router-link>
        </div>
      </div>
    </page-body>
  </Page>
</template>

<script setup>
defineOptions({
  name: "Images",
});

import { usePageStore } from "src/stores/page";

const pageStore = usePageStore();
</script>
