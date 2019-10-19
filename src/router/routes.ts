import Home from '@pages/home'
import Page from '@pages/page'
import Page1 from '@pages/page1'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page',
    component: Page,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    }
  },
  {
    path: '/page1',
    component: Page1,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
]

export default routes
