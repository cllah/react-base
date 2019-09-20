import HOME from '../const/home'
import { Map, List } from 'immutable'

const {
  INCREMENT
} = HOME

const initState = Map({
  list: List([1,2,3])
})

export default function home (state = initState, { type }: {type: string}) {
  switch (type) {
    case INCREMENT:
      let nextState = state.set('list',state.get('list').unshift(0))
      return nextState
    default:
      return state
  }
}
