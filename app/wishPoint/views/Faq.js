'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
//import PackageComponent from '../../componets/Package/Package'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Iconn from 'react-native-vector-icons/Entypo'

export default class Faq extends React.Component {
	static navigationOptions = {
    title: "Mayowish Help"
  }
  render(){
    return(
      <View  style={styles.containerr} >
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"  >
      
       <View style={styles.views}>
       
        <View style={styles.searchSection}>
    <Icon style={styles.searchIcon}  name={ 'search' } size={25} />
    <TextInput
        style={styles.input}
        placeholder="How can we help?"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>
			
			</View>       
       <View style={styles.views}>
																				    				<Text style={styles.heading}>
																				    					 Suggested for you
																				    				</Text>
																				        			
																				    				
																		</View>	
      
      
       <View style={styles.viewss}>
																				    				
			
			 <View style={styles.containerrp}   >
	  				<View style={styles.imgBorderr} >
	   				<Iconn size={ 25 } name={ 'news' } />
	   			 </View>
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										   Concerns at WishPoint
		  									  </Text>
		   					  </View>
		   					  
   			 <View style={styles.imgBorderrs} >
   				<Iconn size={ 25 }  name={ 'chevron-small-up' } />
   			 </View>
     
         </View>
 
 
 	 <View style={styles.containerrp}   >
	  				<View style={styles.imgBorderr} >
	   				<Iconn size={ 25 } name={ 'news' } />
	   			 </View>
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										   Booking Process
		  									  </Text>
		   					  </View>
		   					  
   			 <View style={styles.imgBorderrs} >
   				<Iconn size={ 25 }  name={ 'chevron-small-up' } />
   			 </View>
     
         </View>
 
 
 	 <View style={styles.containerrp}   >
	  				<View style={styles.imgBorderr} >
	   				<Iconn size={ 25 } name={ 'news' } />
	   			 </View>
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										  Party Customization
		  									  </Text>
		   					  </View>
		   					  
   			 <View style={styles.imgBorderrs} >
   				<Iconn size={ 25 }  name={ 'chevron-small-up' } />
   			 </View>
     
         </View>
 
 
 																	    				
																				        			
																				    				
												
																		</View>	
           <View style={styles.viewss}>
           
            <Text style={styles.textt}>
		  										  I still need help
		  									  </Text>
           </View>
		</ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	textt: {
	fontSize: 18,
	},
	 textBorderr: {
 flex:5, justifyContent: 'center',
paddingTop: 15, paddingBottom: 15,
  },
	containerrp: {
    flex: 1,
   
    flexDirection: 'row',
borderTopWidth: 0.8,  borderColor: '#d6d7da',margin: 0, 
   
    
  },
  imgBorderr: {
 flex:2,
  alignItems: 'center',
  justifyContent: 'center',
  },
  imgBorderrs: {
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
	containerr: {
    flex: 1,
    flexDirection: 'column',
  },
  views: {
flex: 1,  
  },
  viewss: {
flex: 1,
paddingTop:25,  
  },
  heading: {
  fontSize:35,
  fontWeight: 'bold',
  marginLeft: 15,
  marginTop:30,
  color: '#000',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
     borderWidth: 0.6,  borderColor: '#d6d7da',
     borderRadius: 5,
     marginTop: 8,
     marginLeft:15,
     marginRight:15,
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
	
});
