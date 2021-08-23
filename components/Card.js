import React,{Component} from 'react';
import { StyleSheet,View,Text } from 'react-native';

class Card extends Component{
  render(){
    return(
      <View style={styles.card}>
        <View style={styles.upp}>
          <Text style={styles.state}>{this.props.state}</Text>
          <View style={{flexDirection:'row',}}>
          <Text style={styles.t}>{this.props.time}</Text>
          <Text style={styles.t}>{this.props.date}</Text>  
          </View>
        </View>
        <View style={{flexDirection:'row',}}>
          <Text style={styles.h}>Confirmed:</Text>
          <Text style={styles.h}>Active:</Text>  
          </View>
          <View style={{flexDirection:'row',}}>
          <Text style={styles.c}>
            {this.props.confirmed}
            </Text>
          <Text style={styles.c}>
            {this.props.active}
            </Text>  
          </View><View style={{flexDirection:'row',}}>
          <Text style={styles.h}>Recovered:</Text>
          <Text style={styles.h}>Deaths:</Text>  
          </View>
          <View style={{flexDirection:'row',}}>
          <Text style={styles.c}>{this.props.recovered}</Text>
          <Text style={styles.c}>{this.props.deaths}</Text>  
          </View>
      </View>)
  }
  
}

const styles = StyleSheet.create({
  state:{
    fontSize:24
  },
  h:{fontSize:22,paddingRight:60,paddingVertical:12,paddingLeft:10},
  c:{
    fontSize:16,paddingRight:120,paddingLeft:20
  },
  t:{
    fontSize:17,paddingRight:150
  },d:{fontSize:17},
  card:{
    height:260,
    width:335,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow:'hidden',
    margin:10,
  },
  upp:{
    backgroundColor:'#FFAE42',
    paddingHorizontal:24,
    paddingVertical:8
  },
  
})

export default Card;