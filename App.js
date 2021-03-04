import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import MyStack from './components/Navigation';
import { Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import dataReducer from './components/datareducer';
import {fetchData} from './components/dataactions';
const rootReducer = combineReducers({
data:dataReducer
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk)); 
class App extends Component() {
  render()
 {
   return (<Provider store={store}>
    <MyStack/>
  </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
});
