import { routerInstance } from "src/boot/router.js";

export const useGoBack = () => {
  // 从路由获取当前页面的path，
  console.log(routerInstance.currentRoute.value.path);
  const pathArray = routerInstance.currentRoute.value.path.split("/");
  console.log("🚀 ~ useGoBack ~ pathArray:", pathArray);
  if (pathArray.length > 2) {
    pathArray.pop();
    // console.log(pathArray.join("/"));
    routerInstance.push(pathArray.join("/"));
  }
};
