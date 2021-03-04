import Data from "./datamodel";
import axios from 'axios';
export const SET_DATA = 'SET_DATA';

export const fetchData = ()=>{

  axios({
  method:'post',
  url:'https://api.covid19india.org/data.json',
  data:data
}).then((response)=>{
  const loadedData = response.data;
  console.log(response.data,'data');
  if(loadedData.status==true){
    dispatch({
      type:SET_DATA,
      payload:loadedData
    })
  }else{
    console.log("haga lodu")
  }
  
} ).catch((error)=>{
  console.log(error);
})
}


// const loadedData=[];
  // for (const key in resData){
  //   var state = resData[key].state;
  //   var lastupdatedtime = resData[key].lastupdatedtime;
  //   var dt= str.split(" ");
  //   var date=dt[0];
  //   var time = dt[1];
  //   var confirmed = resData[key].confirmed;
  //   var active = resData[key].active;
  //   var recovered = resData[key].recovered;
  //   var deaths = resData[key].deaths;
  //   loadedData.push(new Data(key,state,0,0,confirmed,active,recovered,deaths));
  //   console.log("hi")