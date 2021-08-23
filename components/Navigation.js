import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native';
import States from './States';
import Country from './Country';
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import  {HeaderButton}  from "../component/HeaderButton";
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="States" 
        component={States}
        options={{
          headerStyle:{
            backgroundColor:'#f4511e'
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
        }} />
        <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;