'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PackageComponent from '../../componets/Package/Package'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Calendra extends React.Component {
	static navigationOptions = {
    title: "Calendra"
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
