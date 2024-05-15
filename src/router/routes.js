const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/home" },
      {
        path: "/home",
        component: () => import("pages/Home/Home.vue"),
        children: [
          {
            path: "/home/child",
            component: () => import("pages/Home/Child.vue"),
            children: [
              {
                path: "/home/child/grandchild",
                component: () => import("pages/Home/grandChild.vue"),
              },
            ],
          },
        ],
      },
      {
        path: "/questions",
        component: () => import("pages/Questions/Questions.vue"),
        children: [
          {
            path: "answer",
            component: () => import("pages/Questions/Answer.vue"),
          },
        ],
      },
      {
        path: "/test",
        component: () => import("pages/Test/Test.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
