import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("page", () => {
  const usePageTransition = ref(false);
  const setPageTransition = (value) => {
    console.log("setPageTransition is Called", value);
    usePageTransition.value = value;
  };

  const navItems = ref([
    {
      root: "/home",
      to: "/home",
      label: "Home",
      icon: "las la-home",
    },
    {
      root: "/questions",
      to: "/questions",
      label: "Questions",
      icon: "las la-question-circle",
    },
    {
      root: "/test",
      to: "/test",
      label: "Test",
      icon: "las la-question",
    },
  ]);

  return {
    usePageTransition,
    setPageTransition,
    navItems,
  };
});
