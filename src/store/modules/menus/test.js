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
        label: 'ChildTest'
      }
    },
    {
      name: 'FrontTest',
      path: 'fronttest',
      component: lazyLoading('test/FrontTest'),
      meta: {
        label: 'FrontTest'
      }
    },
    {
      name: 'TileSystem',
      path: 'tile',
      component: lazyLoading('test/TileSystem'),
      meta: {
        label: 'TileSystem'
      }
    }
  ]
}
