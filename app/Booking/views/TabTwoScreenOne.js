'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import NotBooking from '../../componets/Booking/NotBooking'
import Booked from '../../componets/Booking/Booked'

export default class TabTwoScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
      }}>
      <Booked />
      
      </View>
    )
  }
}
