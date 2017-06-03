import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'row',

   
    
  },
  textBorder: {
borderBottomWidth: 0.5,  borderColor: '#d6d7da',margin: 0, 
flex:3, justifyContent: 'center',
paddingTop: 15, paddingBottom: 15,
  },
  imgBorder: {
 flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  text: {
   
    fontSize: 18,
   
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
<View>
<ListView
            style = {styles.listContainer}
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
               <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('WishPointScreenTwo') }  >
  <View style={styles.container}   >
  <View style={styles.imgBorder} >
   <Icon size={ 20 } color="#008489" name={ rowData.iconname } />
    </View>
    <View style={styles.textBorder}>
    <Text style={styles.text}>
     {rowData.itemname}
    </Text>
     </View>
  </View>
  </TouchableOpacity>
   )
            }
         />
         
          <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
          } >
					 <Text >
					 reloading
					  </Text>    
          </TouchableOpacity>
      </View>
);

export default Row;