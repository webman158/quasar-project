import { boot } from "quasar/wrappers";

export default boot(async ({ app }) => {
  // 自动注册全局组件 Vite
  const components = import.meta.globEager("../components/Page/*.vue");
  console.log("🚀 ~ boot ~ components:", components);

  Object.keys(components).forEach((key) => {
    const name = key
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");
    app.component(name, components[key].default);
  });
});
