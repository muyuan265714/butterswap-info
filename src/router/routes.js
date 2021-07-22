// Since there are too many lazy loading pages, it will cause Webpack hot updates too slow, so the development environment does not use lazy loading, only lazy loading in the production environment.
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const defaultRoutes = [
  {
    path: '/',
    name: 'overview',
    meta: { title: 'Overview' },
    component: _import('overview/index.vue')
  },
  {
    path: '/pools',
    name: 'pools',
    meta: { title: 'Pools' },
    component: _import('pools/index.vue')
  },
  {
    path: '/tokens',
    name: 'tokens',
    meta: { title: 'Tokens' },
    component: _import('tokens/index.vue')
  }
]

export default [...defaultRoutes]
