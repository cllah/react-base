import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import actions from '@redux/actions'
const {
  incr
} = actions

export default function Home () {
  const { num } = useMappedState(state => ({ num: state.home.num }))
  const dispatch = useDispatch()
  const inc = () => dispatch(incr())

  return (
    <h1>
        Hello,{num}
      <button onClick={inc}>+</button>
    </h1>
  )
}
