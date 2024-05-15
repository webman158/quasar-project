import { boot } from "quasar/wrappers";
import { usePageStore } from "src/stores/page";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ router, store }) => {
  const pageStore = usePageStore();

  router.afterEach((to, from) => {
    // console.log("🚀 ~ router.beforeEach ~ from:", from.path.split("/"));
    // console.log("🚀 ~ router.beforeEach ~ to:", to.path.split("/"));

    const fromRootPath = `/${from.path.split("/")[1]}`;
    const toRootPath = `/${to.path.split("/")[1]}`;
    console.log("🚀 ~ router.afterEach ~ fromPath:", fromRootPath, toRootPath);
    // console.log("🚀 ~ boot ~ store:", store);
    // console.log(store.state.value?.page);

    // 通过store 访问page仓库的方法
    pageStore.setPageTransition(fromRootPath === toRootPath);

    // 记录访问的最终path
    // 获取当前页面的index
    const lastIndex = pageStore.navItems.findIndex(
      (item) => item.root === toRootPath
    );
    // console.log(lastIndex);
    // 修改当前页面的to
    pageStore.navItems[lastIndex].to = to.path;
  });
});
