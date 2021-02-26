import React,{useState,useCallback,useEffect} from 'react';
import axios from "axios";
import {View,Text,StyleSheet,Button,FlatList,ActivityIndicator } from 'react-native';
import Card from './Card'
import {useSelector,useDispatch} from 'react-redux';
import * as dataActions from './dataactions'; 

const States =(props)=>{
  const [error,setError] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const data = useSelector(state=>state.data.statesdata);
  const dispatch = useDispatch();    
  const loadProducts=useCallback( async ()=>{   
    console.log("LOADING PRODUCTS")
    setError(null);
    setIsLoading(true);
    try{  
    await dispatch(dataActions.fetchData());
    }catch(err){
      setError(err.message);
    }
},[dispatch,setIsLoading,setError])

useEffect(()=>{
  const willFocusSub = props.navigation.addListener('willFocus',loadProducts);
    return ()=>{
      willFocusSub.remove();
    };
},[loadProducts])

useEffect(()=>{
  // setIsLoading(true);  
  loadProducts().then(()=>{
    setIsLoading(false)
    console.log("HOGAYA")
  });
  },[dispatch,loadProducts])
  
  if(error){
    <View style={{flex:1,
      justifyContent:'center',alignItems:'center'}}>
        <Text color='red'>An error occured!!</Text>
      <Button title="Try Again" onPress={loadProducts}/>
      </View>
  }
  
  if(isLoading){
    return(
      <View style={{flex:1,
      justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' color='black'/>
      </View>
    );
  }
  return(
    
  //     <View style={styles.container}>
           
  // <Text>hi</Text>
  //     </View>
  <FlatList 
  data={data} 
  keyExtractor={item=>item.id} 
  renderItem={itemData=><Card 
  state={itemData.item.state} 
  time={itemData.item.time} 
  date={itemData.item.date} 
  confirmed={itemData.item.confirmed}
  active={itemData.item.active}
  recovered={itemData.item.recovered}
  deaths={itemData.item.deaths}
  />}
  />
    )}
const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 

export default States;