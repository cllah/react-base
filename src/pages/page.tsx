import React from 'react'
import { useMappedState } from 'redux-react-hook'
import { useHistory, useLocation } from 'react-router'

export default function Page () {
  const { list } = useMappedState(state => ({ list: state.home.get('list') }))
  const history = useHistory()
  const location = useLocation()
  console.log(location)

  return (
    <div style={{ background: 'blue' }}>
      <h1>
              Hello,{list}
      </h1>
      <div onClick={_ => {
        history.goBack()
      }}>back</div>
    </div>
  )
}
