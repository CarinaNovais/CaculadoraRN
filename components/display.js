import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
 ColorPropType
} from 'react-native';

export default props=>{
  return(
    <View style={styles.display}>
      <Text style={styles.dspOper} numberOfLines={1}>{props.valor}</Text>
      <Text style={styles.dspRes} numberOfLines={1}>{props.res}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
display:{
  flex:1,
  padding:20,
  justifyContent:'center',
  alignItems:'flex-end',
  backgroundColor:'#444',
  width:'100%'
},
dspOper:{
fontSize:35,
color:'#fff',
},
dspRes:{
fontSize:50,
color:'#fff',
},

  
})