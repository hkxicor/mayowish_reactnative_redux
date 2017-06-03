import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Notification extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(

      <View style = {styles.container}>
      
      
															      <View style={styles.acitvity} >
												    
																				  		<View style={styles.imgBorder} >
																				   				<Image style={styles.photo} source={require('../../img/logo.png')} />
												         							</View>
																				    	<View style={styles.textBorder}>
																				    				<Text style={styles.partyname}>
																				    					 Party birthday name
																				    				</Text>
																				        			<Text style={styles.textt}>
																				     					wish point name (Delhi NCR REGION) 	wish point name (Delhi NCR REGION)   
																				    				</Text>
																				     	</View>
																				     	</View>
		 
      </View>
   )
    }
     }

const styles = StyleSheet.create({
 
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
   container: {
      flex: 1,
      paddingBottom: 10,
      backgroundColor:'#FFF',
      borderTopWidth: 0.5,  borderColor: '#d6d7da',
     	 },
     	 wishpoint: {
     	 	borderTopWidth: 0.5,  borderColor: '#d6d7da',
flex: 1,
   marginTop:10,
   marginBottom:8,
   marginRight:15,
    flexDirection: 'row',
	
	
	},
	acitvity: {
flex: 1,
   marginTop:10,
    flexDirection: 'row',

	},
	textBorder: {
marginRight: 15,
paddingRight:10,
flex:5, 
flexDirection: 'column'
  },
  imgBorder: {
 flex:2,
 alignItems: 'center',
  paddingTop:10
  },
  partyname: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',  
  },
  text: {
   
    fontSize: 18,
   
  },
   textt: {
   
    fontSize: 15,
   
  },
  
});
