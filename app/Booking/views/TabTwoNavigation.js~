'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabTwo } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
//import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/MaterialIcons';

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabTwo
  }
}
class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Booking',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'date-range' } color={ tintColor }/>
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabTwo
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabTwoNavigation)
