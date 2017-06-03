'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorWishPoint } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/Entypo';

const mapStateToProps = (state) => {
 return {
  navigationState: state.wishPoint
  }
}
class WishPointNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'point',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'location' } color={ tintColor }/>
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorWishPoint
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps)(WishPointNavigation)
