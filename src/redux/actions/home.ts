import HOME from '../const/home'

const {
  INCREMENT
} = HOME

function incr () {
  return {
    type: INCREMENT
  }
}

export default {
  incr
}
