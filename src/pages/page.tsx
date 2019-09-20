import React from 'react'
import { useMappedState } from 'redux-react-hook'

export default function Home () {
  const { list } = useMappedState(state => ({ list: state.home.get('list') }))
  console.log('page')
  return (
    <h1>
            Hello,{list}
    </h1>
  )
}
