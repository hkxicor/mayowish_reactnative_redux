'use strict'

// React
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'
import { View, Text, TouchableOpacity } from 'react-native'
// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

import { itemsFetchData } from '../../Action/items.js';
import Loader from '../../componets/Loader/load.js'
import Notfound from '../../componets/notfound/notfound'



	
class TabOneNavigation extends React.Component {

	componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    };
      reload(){
 	this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
 	};
  static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'search' } color={ tintColor }/>
  }

  render(){
    if (this.props.hasErrored) {
           return <Notfound
             onPress={ ()=>this.reload } />;
        }

        if (this.props.isLoading) {
            return  <Loader
            animating = {true}/>;
        }

        return (
            <Text>{ 'data loaded' }</Text>
        );
    }
 
};


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne,
  items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabOneNavigation)
