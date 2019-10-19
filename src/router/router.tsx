import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation, useHistory } from 'react-router'
import routes from './routes'
import './router.scss'

const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-right'
}
const getSceneConfig = location => {
  const matchedRoute = routes.find(config => new RegExp(`^${config.path}$`).test(location.pathname))
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG
}
let oldLocation = null

function Routes () {
  const location = useLocation()
  const history = useHistory()
  let classNames = ''
  if (history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit
  }
  oldLocation = location

  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      <CSSTransition
        timeout={500}
        key={location.pathname}
      >
        <Switch location={location}>
          {
            routes.map(({ sceneConfig, ...config }, index) => (
              <Route exact key={index} {...config}/>
            ))
          }
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default function router () {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
