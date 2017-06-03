'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import PackageComponent from '../../componets/Package/Package'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Status extends React.Component {
	static navigationOptions = {
    title: "Status"
  }
  render(){
    return(
       <View style={{ backgroundColor: 'white', flex: 1, }} >
        <ScrollView keyboardShouldPersistTaps="always" >
<Text style={styles.wishpointname} >
          Overall Ratting
        </Text>

<Text style={styles.no} >
          You dont have any ratting yet  
        </Text>        
        
<Text style={styles.wishpointname} >
          View and Booking 
        </Text>

<Text style={styles.no} >
          No listed yet
        </Text>   
        
        <Text style={styles.wishpointname} >
          Respond time
        </Text>

<Text style={styles.no} >
          No listed yet
        </Text>  
        <Text style={styles.wishpointname} >
          Commintment Ratting
        </Text>

<Text style={styles.no} >
          No listed yet
        </Text>         
                
        </ScrollView>  
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
   wishpointname: {
	fontSize:25,
	fontWeight: 'bold',
	paddingTop: 20,
	paddingLeft: 15,
	},
	 no: {
	fontSize:18,
	
	paddingTop: 6,
	paddingLeft: 15,
	},
});

