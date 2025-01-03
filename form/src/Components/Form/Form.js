import axios from 'axios';
import React, { useState } from 'react'


export const Forms = () => {
    const[forms,setForms]=useState({})

    

    function submitform(e){
        e.preventDefault();

        axios.get("http://localhost:4000/forms"),{
            
        }


    }
    const Changefn = (e) => {
        console.log(e.target.name, e.target.value);
        setForms({
          ...forms,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div>
        <form onSubmit={submitform}>
            
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' value={forms?.name} onChange={Changefn} />

        <label htmlFor='dob'>DOB</label>
        <input id='dob' name='dob' value={forms?.dbo} onChange={Changefn} />

        <label htmlFor='email'>Name</label>
        <input id='email' name='email' value={forms?.email} onChange={Changefn} />

        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
