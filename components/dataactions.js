import axios from 'axios';
export const SET_DATA = 'set_data';

export const fetchData = ()=>{
  return (dispatch) => {
    axios({
    method:'GET',
    url:'https://api.covid19india.org/data.json',
  }).then((response)=>{
    const loadedData = response.data.statewise;
    dispatch({
      type:SET_DATA,
      payload:loadedData
    })
  } ).catch((error)=>{
    console.log(error,'IN error of API');
  })};}