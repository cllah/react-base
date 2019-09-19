import React from 'react'
import { useMappedState } from 'redux-react-hook'

export default function Home () {
  const { num } = useMappedState(state => ({ num: state.home.num }))
  console.log('page')
  return (
    <h1>
            Hello,{num}
    </h1>
  )
}
