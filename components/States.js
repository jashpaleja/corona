import React,{useState,useCallback,Component,useEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList,ActivityIndicator } from 'react-native';
import Card from './Card'
import {useSelector,useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {fetchData} from './dataactions'; 

class States extends Component{
  componentDidMount(){
    this.props.fetchData()
  }
  render(){
  return(
    
      <View style={styles.container}>
           
  <Text>hi</Text>
      </View>
  // <FlatList 
  // data={data} 
  // keyExtractor={item=>item.id} 
  // renderItem={itemData=><Card 
  // state={itemData.item.state} 
  // time={itemData.item.time} 
  // date={itemData.item.date} 
  // confirmed={itemData.item.confirmed}
  // active={itemData.item.active}
  // recovered={itemData.item.recovered}
  // deaths={itemData.item.deaths}
  // />}
  // />
    )}}


  const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 

function mapStateToProps(state) {
  // console.log(state.myaccountscreen.getoffer, 'sadasd');
  return {
    getOfferList: state.data.statesdata,
  };
}

export default connect(mapStateToProps, {
  fetchData,
})(States);
