'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import PackageComponent from '../../componets/Package/Package'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Iconn from 'react-native-vector-icons/Foundation'

import Iconnn from 'react-native-vector-icons/Entypo'
import Ico from 'react-native-vector-icons/FontAwesome'


export default class BasicInfo extends React.Component {
	static navigationOptions = {
    title: "Basic Info",
    headerRight:  <Ico size={ 40 } color="#008489" name={ 'edit' } />,
  }
  render(){
    return(
     <View style = {styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" >
      <Image source={require('../../img/back.jpg')} style={styles.container}>
       
										
										  		<View>      
										         		<View style={styles.imgBorder} >
																				   				<Image style={styles.photo} source={require('../../img/logo.png')} />
												         							</View>
												         							
												         	<View style={styles.textBorder}>
																				    				<Text style={styles.partyname}>
																				    					 Party birthday name
																				    				</Text>
																				        			<Text style={styles.textt}>
																				     					wish point Address   
																				    				</Text>
																				     	</View>						
										      </View>
								
      </Image>

      <View style = {styles.container}>
     
    <View style={styles.containerr}   >
  				<View style={styles.imgBorderr} >
   				<Icon size={ 25 } color="#790102" name={ 'call' } />
   			 </View>
  						  <View style={styles.textBorderr}>
 								   <Text style={styles.text}>
  										   9784359717
  									  </Text>
   					  </View>
     
  </View> 
  
  
  <View style={styles.containerr}   >
  				<View style={styles.imgBorderr} >
   				<Icon size={ 25 } color="#790102" name={ 'mail' } />
   			 </View>
  						  <View style={styles.textBorderr}>
 								   <Text style={styles.text}>
  										   info@mayowish.com
  									  </Text>
   					  </View>
     
  </View>
  
  <View style={styles.containerr}   >
  				<View style={styles.imgBorderr} >
   				<Iconn size={ 25 } color="#790102" name={ 'web' } />
   			 </View>
  						  <View style={styles.textBorderr}>
 								   <Text style={styles.text}>
  										   www.mayowish.com
  									  </Text>
   					  </View>
     
  </View>
  
   <View style={styles.containerr}   >
  				<View style={styles.imgBorderr} >
   				<Icon size={ 25 } color="#790102" name={ 'people' } />
   			 </View>
  						  <View style={styles.textBorderr}>
 								   <Text style={styles.text}>
  										  3322
  									  </Text>
   					  </View>
     
  </View>
  
  <View style={styles.containerr}   >
  				<View style={styles.imgBorderr} >
   				<Iconnn size={ 25 } color="#790102" name={ 'location' } />
   			 </View>
  						  <View style={styles.textBorderr}>
 								   <Text style={styles.text}>
  										 24, garden no near tapmle pal gav jodhour
  									  </Text>
   					  </View>
     
  </View>
  
   <View style={styles.containerrr}   >
 								   <Text style={styles.text}>
  										About wish wishpoint This warning is caused by a @providesModule declaration with the same name across two different files.
  									  </Text>
     
  </View>
  
      </View>
      
      
      </ScrollView>
      
   </View>    
    )
  }
}




const styles = StyleSheet.create({
	containerr: {
    flex: 1,
   
    flexDirection: 'row',
borderTopWidth: 0.8,  borderColor: '#d6d7da',margin: 0, 
   
    
  },
   containerrr: {
    flex: 1,
   
    flexDirection: 'row',
padding: 15, 
  borderTopWidth: 0.8,  borderColor: '#d6d7da',margin: 0,  
    
  },
	container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  partyname: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',  
  },
 cardname: {
 
 },
 photo: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  imgBorder: {
 flex:1,
 padding:15,
  },
   imgBorderr: {
 flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  textt: {
   color: '#FFF',
    fontSize: 15,
   
  },
  textBorderr: {
 flex:3, justifyContent: 'center',
paddingTop: 15, paddingBottom: 15,
  },
  textBorder: {
marginRight: 15,
paddingRight:10,
paddingLeft: 15,
paddingBottom: 15,
flex:1, 
flexDirection: 'column'
  },
});

