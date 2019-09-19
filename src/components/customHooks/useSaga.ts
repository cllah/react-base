import { stdChannel, runSaga } from 'redux-saga'
import { useState, useEffect, useRef } from 'react'

export const createIO = () => {
  const channel = stdChannel()
  return {
    channel,
    dispatch: action => {
      channel.put(action)
    }
  }
}

const useSaga = (rootSaga, initState) => {
  const [state, setState] = useState(initState)
  const IO = useRef(createIO())
  useEffect(() => {
    const task = runSaga(IO.current, rootSaga, setState)
    return () => task.cancel()
  }, [rootSaga])

  return [state, IO.current.dispatch]
}
export default useSaga
