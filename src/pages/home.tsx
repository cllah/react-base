import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { useHistory } from 'react-router'
import actions from '@redux/actions'
const {
  incr
} = actions
export default function Home () {
  console.log('home')
  const { list } = useMappedState(state => ({ list: state.home.get('list').get(0) }))
  const dispatch = useDispatch()
  const inc = () => dispatch(incr())
  const history = useHistory()

  return (
    <div style={{ background: 'red' }}>
      <h1>
          Hello,{list}
        <button onClick={inc}>+</button>
      </h1>
      <div onClick={_ => {
        history.push('page')
      }}>page</div>
      <br/>
      <div onClick={_ => {
        history.push('page1')
      }}>page1</div>
    </div>
  )
}
