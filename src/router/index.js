import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import util from '@/libs/util.js'

console.log(routes)
// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Routing guard
router.beforeEach(async (to, from, next) => {
  // Change title
  util.title(to.meta.title)
  next()
})

export default router
