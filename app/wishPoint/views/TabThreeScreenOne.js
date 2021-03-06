'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ListView, StyleSheet, Image } from 'react-native'
import Row from '../../componets/List/list'

import Icon from 'react-native-vector-icons/FontAwesome'


 
export default class WishPointScreenOne extends React.Component {
	static navigationOptions = {
    title: "Welcome", header: null
  }
	constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: ds.cloneWithRows([
            {'itemname':'package', 'iconname':'archive', 'onclick':'Package'}, {'itemname':'Base Rate', 'iconname':'database', 'onclick':'BaseRate'}, {'itemname':'Activity', 'iconname':'clock-o', 'onclick':'Activity'}, {'itemname':'Gallery', 'iconname':'image', 'onclick':'Gallery'},
            {'itemname':'Basic Info', 'iconname':'info', 'onclick':'BasicInfo'}, {'itemname':'Settings', 'iconname':'cog', 'onclick':'Setting'}, {'itemname':'Rules', 'iconname':'newspaper-o', 'onclick':'Rules'}, {'itemname':'payments', 'iconname':'paypal', 'onclick':'Payments'}, {'itemname':'calendar', 'iconname':'calendar', 'onclick':'Calendra'},
				{'itemname':'STATS', 'iconname':'bar-chart-o', 'onclick':'Status'}, {'itemname':'HELP', 'iconname':'wechat', 'onclick':'Faq'}, {'itemname':'Give us Feedback', 'iconname':'star', 'onclick':'Feedback'} 
				        
         ])
      };
   }
  render(){
    return(
      <View >
       
     

        
        <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"  >
				 <View style={styles.headingContainer}>
				<Image
          style={styles.logo}
          source={require('../../img/logo.png')}
        />
         
          <Text style={styles.heading} >Walecome Mayowish</Text>
        </View>

<View>
<ListView
            style = {styles.listContainer}
            dataSource = {this.state.dataSource}
            renderRow = {
               (rowData) => (
               <TouchableOpacity
               onPress={ () => this.props.navigation.navigate(rowData.onclick) }
          >
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
 
 <Row dataSource = {this.state.dataSource} />
 
       </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
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
