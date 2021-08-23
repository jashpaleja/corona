import {SET_DATA} from './dataactions';

const initialState = {
  statesdata:[],
};

export default (state=initialState,action)=>{
  switch(action.type){
    case SET_DATA:
      return{
        ...state,statesdata:action.payload,
  };
    default:
      return state;
}
};