import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

const Card = (props)=>{
  return(
  <View style={styles.card}>
    <View style={styles.upp}>
      <Text style={styles.state}>{props.state}</Text>
      <View style={{flexDirection:'row',}}>
      <Text style={styles.t}>{props.time}</Text>
      <Text style={styles.t}>{props.date}</Text>  
      </View>
    </View>
    <View style={{flexDirection:'row',}}>
      <Text style={styles.h}>Confirmed:</Text>
      <Text style={styles.h}>Active:</Text>  
      </View>
      <View style={{flexDirection:'row',}}>
      <Text style={styles.c}>
        {props.confirmed}
        </Text>
      <Text style={styles.c}>
        {props.active}
        </Text>  
      </View><View style={{flexDirection:'row',}}>
      <Text style={styles.h}>Recovered:</Text>
      <Text style={styles.h}>Deaths:</Text>  
      </View>
      <View style={{flexDirection:'row',}}>
      <Text style={styles.c}>{props.recovered}</Text>
      <Text style={styles.c}>{props.deaths}</Text>  
      </View>
  </View>)
}

const styles = StyleSheet.create({
  state:{
    fontSize:24
  },
  h:{fontSize:22,paddingRight:60,paddingVertical:12,paddingLeft:10},c:{
    fontSize:16,paddingRight:120,paddingLeft:20
  },
  t:{
    fontSize:17,paddingRight:150
  },d:{fontSize:17},card:{
    height:250,
    width:335,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow:'hidden'
  },
  upp:{
    backgroundColor:'#567',
    paddingHorizontal:24,
    paddingVertical:8
  },
  
})

export default Card;