'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

// Navigation
import { NavigatorTabOne } from './Home/navigationConfiguration'
import { NavigatorTabTwo } from './Booking/navigationConfiguration'
import { NavigatorTabThree } from './Inbox/navigationConfiguration'
import { NavigatorWishPoint } from './wishPoint/navigationConfiguration'
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

import { items, itemsHasErrored, itemsIsLoading } from './reducers/items.js';


// Middleware
const middleware = () => {
  return applyMiddleware(logger, thunk)
}

export default createStore(
  combineReducers({
  	items,
    itemsHasErrored,
    itemsIsLoading,
    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
    
    wishPoint: (state,action) => NavigatorWishPoint.router.getStateForAction(action,state),
  }),
  middleware(),
)
