const pages = [
  {
    path: '/',
    name: 'home',
    redirect: '/bookshelf'
  },
  {
    path: '/reader',
    name: 'reader',
    component: () => import(/* webpackChunkName: "reader" */ '../views/reader/index')
  },
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: () => import(/* webpackChunkName: "bookshelf" */ '../views/bookshelf/index')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404/index')
  },
  {
    path: '*', // 此处需特别注意置于最底部
    redirect: '/404'
  }
]

export default pages
