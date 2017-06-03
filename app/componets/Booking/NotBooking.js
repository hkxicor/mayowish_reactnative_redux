import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NotBooking extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(

      <View style = {styles.container}>
          
          <Icon size={ 200 } color="#008489" name={ 'remove-shopping-cart' } />
         
            <Text style={styles.heading} >uh oh! No booked</Text>
          <Text style={styles.headingm} > yet not booked any party </Text> 
<TouchableHighlight onPress={this.props.onPress} >           
           <View
          
          style={{
            padding:20,
            borderRadius:5,
            borderWidth: .8,
            borderColor: '#d6d7da',
            fontWeight: 'bold',
            marginTop:20
          }}>
          <Text>{'CHECK OFFERS'}</Text>
        </View>
        </TouchableHighlight>    
      </View>
   )
    }
     }




const styles = StyleSheet.create ({
	logo: {},
	heading: {
	fontSize:30,
	marginTop: 20,
	marginBottom: 20,
	},
	headingm: {
	fontSize:16,
	marginLeft: 30,
	marginRight: 30,
	},
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
});
