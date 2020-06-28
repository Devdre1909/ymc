import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import DPM from "@/components/DPM";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    meta: {
      title: "YOUTUBE MASTERY RELOADED REVIEW"
    }
  },
  {
    path: "/ymc",
    name: "HelloWorld",
    component: HelloWorld,
    meta: {
      title: "YOUTUBE MASTERY RELOADED REVIEW"
    }
  },
  {
    path: "/dpm",
    name: "DPM",
    component: DPM,
    meta: {
      title: "Digital product machine"
    }
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, _from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
