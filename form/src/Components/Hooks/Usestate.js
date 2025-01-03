import { useEffect, useState } from "react";

export const Usestate = () => {
  const [state, setState] = useState("red");
  const [booleans,setBooleans]=useState(false);
  const [objs,setObjs]=useState({
    name:'muthu',
    age:22
  })
  const [count,setCount]=useState(1)
  
  const[arrs,setArrs]=useState([1,2,3,4])
  const[nums,setNums]=useState(66)
  const[u,setU]=useState('undefined')
  const[nulls,setNulls]=useState('null')

  // console.log(state);

  // console.log(booleans);
  // console.log(nums)
  // console.log(objs);
  // console.log(arrs);
  // console.log(u)
  // console.log(nulls);
  
  
  function Hello (){
    console.log("hitting");
  
  }
  Hello();

  if(10<10){
       console.log(true);
       
  }else{
    console.log(false);
    
  }
console.log(count,"count");



const list = [
  {
   
    name : "Kapil",
    age : 25,
    Address : "Karur"
  },
  {
    
    name : "Muthu",
    age : 20,
    Address : "Chennai"
  },{
    
    name : "Naina",
    age : 22,
    Address : "Chennai"
  }
]


  return (
    <div>

      <table>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
        </tr>
        {list.map((list,index)=>(
          
        <tr>
          <td>{index+1}</td>
          <td>{list.name}</td>
          <td>{list.age}</td>
          <td>{list.Address}</td>
          <td><button onClick={()=>{
           console.log(list)
          }}>view</button></td>
          
        </tr>
        ))}
        
        
      </table>
      <br/>
      <br/>
      <br/>
      <button
        onClick={() => {

          if(state==="red"){
            setState("blue")
          }else{
            setState("red")
          }
          
        }}
      >
        Change name string
      </button>

      <button
        onClick={() => {
          setObjs({
            name:'ram',
            age:33
          });
        }}
      >
        Change name objs
      </button>
      <button
        onClick={() => {
          setBooleans(true);
        }}
      >
        Change name booleans
      </button>
      <button
        onClick={() => {
          setArrs([9,9,9,9]);
        }}
      >
        Change name array
      </button>
      <button
        onClick={() => {
          setNums(44);
        }}
      >
        Change name numbers
      </button>
      <button
        onClick={() => {
          setU(undefined);
        }}
      >
        Change name undefined
      </button>
      <button
        onClick={() => {
          setNulls(null);
        }}
      >
        Change name null
      </button>











      <br/>
      <br/>
      <br/>
      <button onClick={()=>{
        if(count>1){
          setCount(count-1)
        }else{
          alert("minmum one quantity is requeire")
        }
        
      }}>-</button>
      {count}
      <button onClick={()=>{
        console.log(count,"plus count");
        
        if(count<10){
          setCount(count+1)
        }else{
          alert("10 is maximum quantity")
        }
       

      }}>+</button>
      <br/>
      <br/>
      <br/>
  
    </div>
  );
};
