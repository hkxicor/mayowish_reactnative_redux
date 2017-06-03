'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import NotNotification from '../../componets/notification/notnoti'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Notification from '../../componets/notification/Notification'

export default class TabThreeScreenOne extends React.Component {
		static navigationOptions = {
 		title: "Edit Basic Info", 
 		headerRight:  <Icon size={ 35 } color="#008489" name={ 'notifications-paused' } />,
  }
  render(){
    return(
      <View style={{ flex:1, }} >
      
        <ScrollView

        keyboardShouldPersistTaps="always"  >
            <Notification />
             <Notification />
              <Notification />
            </ScrollView>
             </View>
    )
  }
}
