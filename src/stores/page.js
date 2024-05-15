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
      root: "/images",
      to: "/images",
      label: "Images",
      icon: "las la-image",
    },
    {
      root: "/test",
      to: "/test",
      label: "Test",
      icon: "las la-question",
    },
  ]);

  const images = ref([
    {
      id: "id1",
      url: "/images/1.jpg",
      title: "Image 1",
    },
    {
      id: "id2",
      url: "/images/2.jpg",
      title: "Image 2",
    },
    {
      id: "id3",
      url: "/images/3.jpg",
      title: "Image 3",
    },
    {
      id: "id4",
      url: "/images/4.jpg",
      title: "Image 4",
    },
    {
      id: "id5",
      url: "/images/5.jpg",
      title: "Image 5",
    },
    {
      id: "id6",
      url: "/images/6.jpg",
      title: "Image 6",
    },
  ]);

  const getImages = (imageId) => {
    return images.value.find((image) => image.id === imageId);
  };

  return {
    usePageTransition,
    setPageTransition,
    navItems,
    images,
    getImages,
  };
});
