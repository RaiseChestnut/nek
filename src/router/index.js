import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Home from "../views/Home";
import App from "../views/App";
import Info from "../views/Info";
import My from "../views/My";
import create from '../views/Create'
import OneStageApproval from '../views/OneStageApproval'
import TwoStageApproval from '../views/TwoStageApproval'
import Repair from "../views/Repair";
import FeedBack from "../views/FeedBack.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
    path: '/approval_1',
    name: 'approval_1',
    component: OneStageApproval
  },
  {
    path: '/approval_2',
    name: 'approval_2',
    component: TwoStageApproval
  },
	{
		path:'/feedback',
		name:'feedback',
		component:FeedBack
	},
  {
    path: '/repair',
    name: 'repair',
    component: Repair
  }
]

const router = new VueRouter({
  routes
})

export default router
