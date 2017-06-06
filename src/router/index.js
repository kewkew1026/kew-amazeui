import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: require('../views/index.vue')
    }

    , {
      path: "/article",
      component: {
        template: '<articles></articles>',
        components: {
          "articles": function (resolve) {
            require(['../views/articles.vue'], resolve)
          }
        }
      }
    }

    , {
      path: "/buttons",
      component: {
        template: '<buttons></buttons>',
        components: {
          "buttons": function (resolve) {
            require(['../views/buttons.vue'], resolve)
          }
        }
      }
    }

    , {
      path: "/forms",
      component: {
        template: '<forms></forms>',
        components: {
          "forms": function (resolve) {
            require(['../views/forms.vue'], resolve)
          }
        }
      }
    }

    , {
      path: "/lists",
      component: {
        template: '<lists></lists>',
        components: {
          "lists": function (resolve) {
            require(['../views/lists.vue'], resolve)
          }
        }
      }
    },
    {
      path: "/panels",
      component: {
        template: '<panels></panels>',
        components: {
          "panels": function (resolve) {
            require(['../views/panels.vue'], resolve)
          }
        }
      }
    },
    {
      path: "/modals",
      component: {
        template: '<modals></modals>',
        components: {
          "modals": function (resolve) {
            require(['../views/modals.vue'], resolve)
          }
        }
      }
    },
    {
      path: "/paginations",
      component: {
        template: '<paginations></paginations>',
        components: {
          "paginations": function (resolve) {
            require(['../views/paginations.vue'], resolve)
          }
        }
      }
    },
    {
      path: "/breadcrumb",
      component: {
        template: '<breadcrumb></breadcrumb>',
        components: {
          "breadcrumb": function (resolve) {
            require(['../views/breadcrumb.vue'], resolve)
          }
        }
      }
    },

    {
      path: "/datetimepicker",
      component: {
        template: '<dtpicker></dtpicker>',
        components: {
          "dtpicker": function (resolve) {
            require(['../views/dtpicker.vue'], resolve);
          }
        }
      }
    },

    {
      path: "/datatables",
      component: {
        template: '<datatable></datatable>',
        components: {
          "datatable": function (resolve) {
            require(['../views/datatables.vue'], resolve);
          }
        }
      }
    },

    {
      path: "/navs",
      component: {
        template: '<navs></navs>',
        components: {
          "navs": function (resolve) {
            require(['../views/navs.vue'], resolve);
          }
        }
      }
    },

    {
      path: "/tabs",
      component: {
        template: '<tabs></tabs>',
        components: {
          "tabs": function (resolve) {
            require(['../views/tabs.vue'], resolve);
          }
        }
      }

    }
  ]
})
