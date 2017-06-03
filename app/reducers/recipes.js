import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {

});

export const recipeCount = createReducer(0, {
  [types.ADD_RECEPE](state, action) {
    return state+1;
  },

});
