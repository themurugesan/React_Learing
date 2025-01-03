import React, { useContext } from 'react'
import { contextmenu } from '../../App'

export const UseContext = () => {

    const {data,setData} = useContext(contextmenu);

    console.log(data);
       
  return (
    <div>
        <button onClick={()=>{setData("changed setData")}}>Change text value</button>
    </div>
  )
}
