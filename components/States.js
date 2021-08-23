import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,FlatList,ActivityIndicator, SafeAreaView } from 'react-native';
import Card from './Card'
import {fetchData} from './dataactions';
import {connect} from 'react-redux';

class States extends Component{
  componentDidMount(){
    this.props.fetchData()
  }
  render(){
  return(

      <SafeAreaView style={styles.container}>
      <FlatList
      data={this.props.getofferList}
      keyExtractor={item=>item.id}
      renderItem={itemData=><Card
      state={itemData.item.state}
      time={itemData.item.lastupdatedtime.split(" ")[1]}
      date={itemData.item.lastupdatedtime.split(" ")[0]}
      confirmed={itemData.item.confirmed}
      active={itemData.item.active}
      recovered={itemData.item.recovered}
      deaths={itemData.item.deaths}
      />}
      />
      </SafeAreaView>

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
  // console.log(state.data.statesdata);
  return {
    getofferList: state.data.statesdata
    
  };
  
}

export default connect(mapStateToProps, {
  fetchData,
})(States);
