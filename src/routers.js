export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./views/home/index')
  },
  '/login': {
    name: 'login',
    component: require('./views/member/login')
  },
  '/room/:id':{
    name:'room',
    component:require('./components/room-detail')
  },
  '/directory': {
    name:'directory',
    component: require('./views/directory/index')
  },
  '/directory/game/:id': {
    name: 'game',
    component: require('./views/directory/game')
  },
  '/recommend': {
    name: 'recommend',
    component: require('./components/developing')
  },
  '*': {
    component: require('./views/home/index'),
  }
})

