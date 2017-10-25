import lazyLoading from './lazy-loading'

export default {
  name: 'Test',
  path: '/test',
  meta: {
    label: 'Test'
  },
  component: lazyLoading('test'),
  children: [
    {
      name: 'ChildTest',
      path: 'childtest',
      component: lazyLoading('test/ChildTest'),
      meta: {
        label: 'label-child-test'
      }
    }
  ]
}
