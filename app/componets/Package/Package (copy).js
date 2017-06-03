'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, Image } from 'react-native'
import Row from '../../componets/List/list'

import Icon from 'react-native-vector-icons/FontAwesome'


 
export default class WishPointScreenOne extends React.Component {
	
  render(){
    return(
      <View >
       <ScrollView keyboardShouldPersistTaps="always"  >
		 <View>
			<FlatList data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}]} renderItem={({item}) =>  <TouchableOpacity  >
          <View style={styles.card} >
    <View style={styles.backkkk} >
			  <Text style={styles.packagehead}>
     					package nameeeeee
   			 </Text>
    			<Text style={styles.textt}>
     				wrgqwjeygrywjegryjwgeyjrgwgejq qwjhrgweh wjdgwe qwdgewfd qwgevdw3t
    			</Text>
   

<FlatList data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}]} renderItem={({item}) => 
               
  <View style={styles.acitvity} >
    
  		<View style={styles.imgBorder} >
   			<Icon size={ 20 } color="#008489" name={ 'location' } />
  		</View>
    	<View style={styles.textBorder}>
    				<Text style={styles.text}>
    					 Activity namee
    				</Text>
        			<Text style={styles.textt}>
     					{item.key}, {item.key}, {item.key}, {item.key}, {item.key}
    				</Text>
     	</View>

  </View> } />
  
  </View>
  
      
  
  <View style={styles.acitvity} >
  <ScrollView
      horizontal={true}
        keyboardShouldPersistTaps="always"  >

  
  
        
    </ScrollView>
  </View>
  
   </View> 
  </TouchableOpacity>
  } />
			</View> 
 
       </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
	acitvity: {

flex: 1,
   marginTop:10,
    flexDirection: 'row',

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
    shadowOffset: {
      height: 3,
      width: 6,
    },
  },
	packagehead: {
	fontSize: 26,
	fontWeight: 'bold',
	
	},
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderBottomWidth: 0.5,  borderColor: '#d6d7da',
    
  },
  heading: {
    //color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  backkkk: { flex: 1,
   padding: 10,
    flexDirection: 'column',},
   container: {
    flex: 1,
   
    flexDirection: 'row',

   
    
  },
  textBorder: {
margin: 0, 
flex:3, justifyContent: 'center',

    flexDirection: 'column'
  },
  imgBorder: {
 flex:1,
  alignItems: 'center',
  paddingTop:10
  },
  text: {
   
    fontSize: 18,
   
  },
  textt: {
   
    fontSize: 14,
   
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
