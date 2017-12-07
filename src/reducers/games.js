import { CREATE_GAME } from '../actions/games/create'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
    // clones payload and state array, make a new state of the state
      return [{ ...payload }].concat(state)

    default :
      return state
  }
}
