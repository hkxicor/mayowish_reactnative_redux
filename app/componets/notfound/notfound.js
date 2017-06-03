import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

export default class Notfound extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(

      <View style = {styles.container}>
          
           <Image
          style={styles.logo}
          source={require('../../img/404.png')}
        />
         
          <Text style={styles.heading} >Oh no!</Text>
          <Text style={styles.headingm} > No Internet found. check your </Text>
          <Text style={styles.headingm} >  connection or try again.</Text>
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
          <Text>{'RETRY'}</Text>
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
