import { createBrowserRouter, Form, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Body } from './Components/Body/Body';
import { Header, Navbar } from './Components/Header/Header';
import { Errorpage } from './Components/Errorpage/Errorpage';
import { Contact } from './Components/Contact/Contact';
import { About } from './Components/About/About';
import { Params } from './Components/Params/Params';
import { createContext, useState } from 'react';
import { UseContext } from './Components/Hooks/UseContext';
import { Reducer } from './Components/Hooks/Reducer';
import { Callback } from './Components/Hooks/Callback/Callback';
import { Custom } from './Components/Hooks/Custom hooks/Custom';
import { Axios } from './Components/Axioscall/Axios';
import { Forms } from './Components/Form/Form';


export const contextmenu = createContext();

function App() {


  const [data,setData] = useState("context data")

  const router = createBrowserRouter([
    {
      path:"*",
      element : <Errorpage/>
    },
    {
      path : "/header",
      element : <Header/>,
      children:[{
        path : "contact",
        element : <Contact/>
      },{
        path : "about",
        element:<About/>
      }]
    },
    {
      path : "/body",
      element : <Body/>
    },
    {
      path : "/params",
      element : <Params/>
    },{
      path:"context",
      element : <UseContext/>
    },{
      path : "reducer",
      element : <Reducer/>
    },{
      path : "callback",
      element : <Callback/>
    },{
      path : "custom",
      element : <Custom />
    },
    {
      path :"axios",
      element :<Axios/>
    }
    ,{
      path:"form",
      element:<Forms/>
    }
  ])
   


  return (
    // <Routes>
    //   <Route path='/header' element=<Header/>>
    //     <Route path='contact' element=<Contact/>/>
    //     <Route path='about' element=<About/> />
    //   </Route>
    //   <Route path='/body' element=<Body/> />
    //   <Route path='/params/:id/:item' element=<Params/> />
    //   <Route path='*' element=<Errorpage/> />
    // </Routes> 
    <contextmenu.Provider value={{data,setData}}>
    <RouterProvider router={router}>
    
   
    </RouterProvider>

    </contextmenu.Provider>
  );
}

export default App;
