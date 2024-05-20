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
          <q-img :src="image.url" @click="dialog = true"></q-img>
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

    <q-dialog
      v-model="dialog"
      maximized
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
      backdrop-filter="blur(4px)"
    >
      <q-card>
        <!-- <q-card-section class="row items-center q-pb-none text-h6"></q-card-section> -->
        <q-carousel
          animated
          swipeable
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide
            v-for="item in slideImgs"
            :key="item.src"
            :name="item.name"
            :img-src="item.src"
          />
        </q-carousel>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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

const dialog = ref(false);
const slide = ref(1);
const slideImgs = ref([
  {
    name: "1",
    src: "/othersimgs/1.jpg",
  },
  {
    name: "2",
    src: "/othersimgs/2.jpg",
  },
  {
    name: "3",
    src: "/othersimgs/3.jpg",
  },
  {
    name: "4",
    src: "/othersimgs/4.jpg",
  },
  {
    name: "5",
    src: "/othersimgs/5.jpg",
  },
  {
    name: "6",
    src: "/othersimgs/6.jpg",
  },
  {
    name: "7",
    src: "/othersimgs/7.jpg",
  },
  {
    name: "8",
    src: "/othersimgs/8.jpg",
  },
  {
    name: "9",
    src: "/othersimgs/9.jpg",
  },
]);
</script>
