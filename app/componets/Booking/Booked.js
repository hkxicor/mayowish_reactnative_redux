'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, Image } from 'react-native'
import Row from '../../componets/List/list'

import Icon from 'react-native-vector-icons/FontAwesome'
import Iconn from 'react-native-vector-icons/Ionicons'




 
export default class Booked extends React.Component {
	
  render(){
    return(
      <View >
       <ScrollView keyboardShouldPersistTaps="always"  >
		
			 <View style={styles.card} >
			 
															 <View style={styles.wishpoin} >
															      <View style={styles.acitvity} >
												    
																				  		<View style={styles.imgBorder} >
																				   				<Image style={styles.photo} source={require('../../img/logo.png')} />
												         							</View>
																				    	<View style={styles.textBorder}>
																				    				<Text style={styles.partyname}>
																				    					 Party birthday name
																				    				</Text>
																				        			<Text style={styles.textt}>
																				     					Package Id... 
																				    				</Text>
																				     	</View>
																		</View>
												  
															</View>
									<View style={styles.cardmediaump} >						
<Iconn size={ 20 } color="#008489" name={ 'md-timer' } /> 
											<Text style={styles.cardinforatep}> { 'time 7/21 => 2:30AM' } </Text>															
										</View>	
							<View style={styles.cardmediaump} >						
<Iconn size={ 20 } color="#008489" name={ 'ios-people' } /> 
											<Text style={styles.cardinforatep}>{ 'total people: 26' } </Text>														
										</View>	
										
								<View style={styles.cardmediaump} >						
<Iconn size={ 20 } color="#008489" name={ 'md-timer' } /> 
											<Text style={styles.cardinforatep}> { 'TIME limit : 2H' } </Text>															
										</View>										
															
			<View style={styles.cardmediaum} >
			 <Text style={styles.mediumtxt} >wish point name (Delhi NCR REGION)  wish point name (Delhi NCR REGION)  wish point name (Delhi NCR REGION) </Text>
			</View>
 						
	<View style={styles.cardinfo} >
											
				<View style={styles.cardinforate} >			
				<Text style={styles.cardinforatee}> PAID 2000 </Text><Text style={styles.cardinfodis}> DUE 6000 </Text>
				</View>
	</View>		
			
			</View>
       </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
	cardinforatep: {
marginBottom:4,	
marginLeft: 6,
marginRight:20,
	},
	mediumtxt: {
	fontSize: 16,
	color: '#473737',
	},
	cardmediaum: {
	margin:7,
	},
	cardmediaump: {
		flex: 1,
		flexDirection: 'row',
	margin:7,
	},
	cardimgm: {
	margin:5,
	height: 110,
    width: 110,
	},
	cardimg: {
flex:1,
flexDirection: 'row',	
	},
	cardinfo: {},
	cardinforate: {
		flex:1,
flexDirection: 'row',	
padding: 5,
	
	},
	cardinforatee: {
		flex: 1,
	color: '#008489',
	fontFamily: 'bolder'
	},
	cardinfoacrate: {
		flex: 1,
	color: '#234567',
	textDecorationLine: "line-through",
	
	},
	cardinfodis: {
		flex: 2,
	color: 'red',
	
	},
	photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
	wishpoint: {
flex: 1,
   marginTop:10,
    flexDirection: 'row',
	
	
	},
	acitvity: {

flex: 1,
   marginTop:10,
    flexDirection: 'row',

	},
	textBorder: {
margin: 0, 
flex:4, justifyContent: 'center',

    flexDirection: 'column'
  },
  imgBorder: {
 flex:1,
  alignItems: 'center',
  paddingTop:10
  },
  partyname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',  
  },
  text: {
   
    fontSize: 18,
   
  },
   textt: {
   
    fontSize: 16,
   
  },
	cardtxt: {
marginLeft: 5,	
	},
	cardfooter: {
flex:1,
height:40,
flexDirection: 'row',
borderTopWidth: 0.5,  borderColor: '#d6d7da',
paddingTop: 2,	
 
	},
	card:{
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    flexDirection: 'column',
    shadowOffset: {
      height: 3,
      width: 6,
    },
  },
cardrating: {
flex: 1,
flexDirection: 'row',

 justifyContent: 'center',
    alignItems: 'center',
},
cardcharge: {
flex: 1,

 justifyContent: 'center',
    alignItems: 'center',
},
cardsave : {
flex: 1,
 justifyContent: 'center',
    alignItems: 'center',

}	
});
