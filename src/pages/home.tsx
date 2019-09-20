import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import actions from '@redux/actions'
const {
  incr
} = actions

export default function Home () {
  const { list } = useMappedState(state => ({ list: state.home.get('list').get(0) }))
  const dispatch = useDispatch()
  const inc = () => dispatch(incr())
  console.log('home')
  return (
    <h1>
        Hello,{list}
      <button onClick={inc}>+</button>
    </h1>
  )
}
