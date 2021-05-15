import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/base'
    }, {
        path: '/img/:url',
        name: 'CodeImg',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CodeImg.vue')
    },
    {
        path: '/base',
        name: 'Base',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Base.vue')
    },
    {
        //     path: '/coy',
        //     name: 'coy',

        //     component: () =>
        //         import ('../views/Coy.vue')
        // }, {
        path: '/dark',
        name: '',

        component: () =>
            import ('../views/Dark.vue')
    }, {
        path: '/funky',
        name: '',

        component: () =>
            import ('../views/Funky.vue')
    }, {
        path: '/okaidia',
        name: '',

        component: () =>
            import ('../views/Okaidia.vue')
    }, {
        path: '/solarizedlight',
        name: '',

        component: () =>
            import ('../views/Solarizedlight.vue')
    }, {
        path: '/tomorrow',
        name: '',

        component: () =>
            import ('../views/Tomorrow.vue')
    }, {
        path: '/twilight',
        name: '',

        component: () =>
            import ('../views/Twilight.vue')
    },
]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router