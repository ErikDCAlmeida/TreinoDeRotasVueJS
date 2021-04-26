import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contato",
    name: "Contato",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contato" */ "../views/Contato.vue"),
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () =>
      import(/* webpackChunkName: "cursos" */ "../views/Cursos.vue"),
    children: [
      {
        path: ":curso",
        name: "Curso",
        props: true,
        component: () =>
          import(/* webpackChunkName: "curso" */ "../views/Curso.vue"),
        children: [
          {
            path: ":aula",
            name: "Aula",
            props: true,
            component: () =>
              import(/* webpackChunkName: "aulas" */ "../views/Aula.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
