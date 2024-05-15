<template>
  <Page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Images" />
      </template>
      <template #title> Image </template>
    </page-header>

    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <div v-if="image">
          <q-img :src="image.url"></q-img>
          <div class="q-pa-lg">
            <div class="text-h5">{{ image.title }}</div>
            <div class="text-subtitle1 q-mt-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, ipsum nisi, velit tenetur nam voluptate aliquid
              deserunt natus at, atque iusto cumque excepturi sint minus quaerat
              magni. Architecto, harum fuga.
            </div>
          </div>
        </div>
      </transition>
    </page-body>
  </Page>
</template>

<script setup>
import { ref, onActivated, onDeactivated } from "vue";
import { useRoute } from "vue-router";
import { usePageStore } from "src/stores/page";

defineOptions({
  name: "Images",
});

const route = useRoute();
const pageStore = usePageStore();
const image = ref(null);

onActivated(() => {
  console.log("🚀 ~ imageId:", route.params.id);
  image.value = pageStore.images.find((item) => item.id === route.params.id);
  console.log("🚀 ~ onActivated ~ image.value:", image.value);
});

onDeactivated(() => {
  image.value = null;
});
</script>
