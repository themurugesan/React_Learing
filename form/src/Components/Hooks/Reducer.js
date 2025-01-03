import React, { useReducer } from 'react'

export const Reducer = () => {
    const initialstate = {Add:{},Sub:{}};

   const reducer = (state,action)=>{
        switch(action.type){
            case "ADD" :
                return {...state,Add :action.payload}
            case "Sub" :
                return {...state,Sub:action.payload}
            default :
              return state    
        }
   }
    const [reducestate,dispatch] = useReducer(reducer,initialstate);

     

     console.log(reducestate,"reduceinitial state");
     

  return (
    <div>
        <button onClick={()=>{dispatch({payload:"Add data",type:"ADD"})}}>Add data</button>
        <button onClick={()=>{dispatch({payload:"Sub data",type:"Sub"})}}>Sub data</button>

    </div>
  )
}
