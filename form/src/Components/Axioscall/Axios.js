import axios from 'axios'
import React, { useEffect } from 'react'

export const Axios = () => {
  
    const Senddata = ()=>{
        axios.post("http://192.168.29.232:4000/api/data",{name:"kapil"})
        .then((res)=>{
            console.log(res);
             alert(res.data.msg)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    
 useEffect(()=>{
   axios.get("http://192.168.29.232:4000/api/getdata")
   .then((res)=>{
    console.log(res);
   })
   .catch((err)=>{
    console.log(err);
    
   })
   axios.get("http://192.168.29.232:4000/get/muthu")
   .then((res)=>{
    console.log(res,"muthu");
   })
   .catch((err)=>{
    console.log(err);
    
   })
 },[])




  return (
    <div>
        <button onClick={Senddata}>Click to send data</button>
    </div>
  )
}
