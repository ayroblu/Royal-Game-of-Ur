import { SET, RESET } from '../types/game'

const initialState = {
  boardDims: null
, loading: true
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET:
      return {...state, ...action.payload}
    case RESET:
      return {...initialState, ...action.payload}
    default:
      return state
  }
}
