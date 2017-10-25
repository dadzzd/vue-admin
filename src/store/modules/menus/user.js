import lazyLoading from './lazy-loading'

export default {
  name: 'User',
  path: '/user',
  meta: {
    label: 'user List'
  },
  component: lazyLoading('user')
}
