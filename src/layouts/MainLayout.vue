<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
        no-caps
      >
        <q-route-tab
          v-for="item in navItems"
          :key="item.root"
          :label="item.label"
          :icon="item.icon"
          :to="item.to"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { usePageStore } from "src/stores/page";

defineOptions({
  name: "MainLayout",
});

const pageStore = usePageStore();
const { navItems } = toRefs(pageStore);
</script>
