import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './pages'
import beforeEach from './before-each'
import afterEach from './after-each'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes,
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {x: 0, y: 0}
    }
  }
})

// router.beforeEach(beforeEach)
// router.afterEach(afterEach)

router.__proto__.openWindow = function (obj) {
  const routeData = router.resolve(obj)
  window.open(routeData.href, '_blank')
}

export default router
