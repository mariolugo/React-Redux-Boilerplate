import * as types from '../constants/ActionTypes'

const initialState = {
  hello: 'world'
};

export default function beers(state= initialState, action) {
  switch(action.type) {
    case types.SEARCH_BEER:
      return state.hello;

    default:
      return state
  }
}