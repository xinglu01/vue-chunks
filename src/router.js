import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

const Frame = () => import('@/pages/home/frame')   
const Login = () => import('@/pages/login')   
const HelloWorld = () => import('@/pages/components/HelloWorld')   
const optionOne = () => import('@/pages/components/optionOne')   
const optionTwo = () => import('@/pages/components/optionTwo')   
const navigationOne = () => import('@/pages/components/navigationOne')   
const navigationTwo = () => import('@/pages/components/navigationTwo')   

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: '云登录'
            }
        },
        {
            path: '/frame',
            name: 'Frame',
            component: Frame,
            meta: {
                title: '云平台'
            },
            children: [
                {
                    path: '/frame/hello',
                    name: 'HelloWorld',
                    component: HelloWorld,
                    meta: {
                        title: '欢迎进入页面'
                    },
                },
                {
                    path: '/frame/optionOne',
                    name: 'optionOne',
                    component: optionOne,
                    meta: {
                        title: 'optionOne'
                    },
                },
                {
                    path: '/frame/navigationOne',
                    name: 'navigationOne',
                    component: navigationOne,
                    meta: {
                        title: '欢迎进入页面'
                    },
                },
                {
                    path: '/frame/optionTwo',
                    name: 'optionTwo',
                    component: optionTwo,
                    meta: {
                        title: '欢迎进入页面'
                    },
                },
                {
                    path: '/frame/navigationTwo',
                    name: 'navigationTwo',
                    component: navigationTwo,
                    meta: {
                        title: '欢迎进入页面'
                    },
                }
            ]
        },
        {
            path:'/',
            redirect:'/login'
        },

    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
