
import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import index from '@/components/index'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'index', component: index },
    ]
})