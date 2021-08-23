import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import MyStack from './components/Navigation';
import { Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import datareducer from './components/datareducer';
const rootReducer = combineReducers({
data:datareducer
})
 
class App extends Component{
  render()
 {
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
   return (
   <Provider store={store}>
    <MyStack/>
    </Provider>
  );
}
}
export default App;