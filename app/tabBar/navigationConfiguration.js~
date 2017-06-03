'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../Home/views/TabOneNavigation'
import TabTwoNavigation from '../Booking/views/TabTwoNavigation'
import TabThreeNavigation from '../Inbox/views/TabThreeNavigation'
import WishPointNavigation from '../wishPoint/views/TabThreeNavigation'

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  WishPointNavigation: { screen: WishPointNavigation },
}

const tabBarConfiguration = {
  //...other configs
  tabBarPosition: 'bottom',
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: '#008489',
    inactiveTintColor: '#484848',
// background color is for the tab component
style: {
    backgroundColor: 'white',
  },
  labelStyle: {
 fontSize: 12,
 fontWeight: 'bold', 
  	},
  iconStyle: {
  	
  	marginTop:0,
  	paddingTop:0,
  	},
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
    showIcon:true,
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
