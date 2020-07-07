import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import DPM from "@/components/DPM";
import Dropshipping from "@/components/Dropshipping";

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
  },
  {
    path: "/dropshiply",
    name: "DROP SHIPPING",
    component: Dropshipping,
    meta: {
      title: "Dropshiply’s FB"
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
