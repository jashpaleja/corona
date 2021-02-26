import Data from "./datamodel";
import axios from 'axios';
export const SET_DATA = 'SET_DATA';

export const fetchData = ()=>{
return async(dispatch)=>{
try{
const url = 'https://api.covid19india.org/data.json';
    const response = axios.get(url).then((res)=>{
      const resData = res.data.statewise;
    })
    .catch(error=>console.error(`Error:${error}`));
  
  const loadedData=[];
  for (const key in resData){
    var state = resData[key].state;
    var lastupdatedtime = resData[key].lastupdatedtime;
    var dt= str.split(" ");
    var date=dt[0];
    var time = dt[1];
    var confirmed = resData[key].confirmed;
    var active = resData[key].active;
    var recovered = resData[key].recovered;
    var deaths = resData[key].deaths;
    loadedData.push(new Data(key,state,0,0,confirmed,active,recovered,deaths));
    console.log("hi")
  }
  dispatch({type:SET_DATA, data:loadedProduct});  
}catch(err){
  throw err;
}}}
