'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
//import PackageComponent from '../../componets/Package/Package'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Setting extends React.Component {
	static navigationOptions = {
    title: "Settings"
  }
  render(){
    return(
      <View style={{ backgroundColor: 'white', flex: 1, }} >
        <ScrollView keyboardShouldPersistTaps="always" >
        
 <View style={styles.containerrp}   >
	  				
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										   Notification
		  									  </Text>
		   					  </View>
		   					  
   			
     
         </View>
         
         <View style={styles.containerrp}   >
	  				
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										   Transaction
		  									  </Text>
		   					  </View>
		   					  
   			
     
         </View>
         
         <View style={styles.containerrp}   >
	  				
			  					  <View style={styles.textBorderr}>
		 								   <Text style={styles.textt}>
		  										   Log Out
		  									  </Text>
		   					  </View>
		   					  
   			
     
         </View>
               
                
        </ScrollView>  
      
      </View>
      
    )
  }
}



const styles = StyleSheet.create({
   containerrp: {
    flex: 1,
   
    flexDirection: 'row',
borderTopWidth: 0.8,  borderColor: '#d6d7da',margin: 0, 
   
    
  },
  textt: {
     fontSize: 18,
  },
  
 	 textBorderr: {
 flex:5, justifyContent: 'center',
paddingTop: 15, paddingBottom: 15,
paddingLeft: 40,
  },
});

