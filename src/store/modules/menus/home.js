import lazyLoading from './lazy-loading'

export default {
  name: 'Home',
  path: '/',
  meta: {
    label: 'Home'
  },
  component: lazyLoading('home')
}
