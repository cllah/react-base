import HOME from '../const/home'

const {
  INCREMENT
} = HOME

const initState = {
  num: 5
}

export default function home (state = initState, { type }: {type: string}) {
  switch (type) {
    case INCREMENT:
      return { num: state.num + 1 }
    default:
      return state
  }
}
