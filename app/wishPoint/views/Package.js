'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PackageComponent from '../../componets/Package/Package'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Packege extends React.Component {
	static navigationOptions = {
    title: "Welcome"
  }
  render(){
    return(
      <View style={{
        flex:1
      }} >
      
       
        
			<PackageComponent />
      </View>
    )
  }
}
