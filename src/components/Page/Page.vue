<template>
  <div class="page absolute-top fit bg-white shadow-4 overflow-hidden">
    <div
      class="page-nudger fit"
      :class="{ 'nudger-left': hasActiceChildPage }"
      v-touch-swipe.mouse.right="useGoBack"
    >
      <slot></slot>
    </div>

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="usePageTransition"
      >
        <keep-alive>
          <component
            :is="Component"
            @pageActice="hasActiceChildPage = true"
            @pageDeactice="hasActiceChildPage = false"
          ></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, toRefs, onActivated, onDeactivated } from "vue";
import { usePageStore } from "src/stores/page";
import { useGoBack } from "src/composables";

const hasActiceChildPage = ref(false);

const pageStore = usePageStore();
const { usePageTransition } = toRefs(pageStore);

const emits = defineEmits(["pageActice", "pageDeactice"]);
onActivated(() => {
  console.log("Page activated");
  emits("pageActice", true);
});

onDeactivated(() => {
  console.log("Page deactivated");
  emits("pageDeactice", false);
});
</script>

<style lang="scss" scoped></style>
