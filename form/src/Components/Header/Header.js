import { Link, Links, NavLink, Outlet, useLocation } from "react-router-dom";
import { Body } from "../Body/Body";
import "./Header.css";
import { Usestate } from "../Hooks/Usestate";
import { useContext } from "react";
import { contextmenu } from "../../App";
export const Header = ({ items }) => {
  // console.log(items);
  let location = useLocation();
  let search = new URLSearchParams(location.search);
  let name = search.get("name");
  let address = search.get("address");
  let age = search.get("age");

  let arr = ["assa", "shajhd"];
  const {data,setData} = useContext(contextmenu);
console.log(data,"context dataa");


  return (
    <div>
      <div className="header">
        <p>Header</p>
        <p>
          {name} : {address} age = {age}
        </p>
        {/* <img src={flower} alt="" /> */}
        {/* {arr.length ? arr.map((item,index)=>(<p key={index}>{item}</p>)) : "no data found"} */}

        {/* <Navbar data ={arr} /> */}
        {/* <Link to="/header/contact">Contact</Link>
         <Link to="/header/about">About</Link> */}
         <Usestate/>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
            }}
          to="/header/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
            }}
          to="/header/about"
        >
          About
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export const Navbar = ({ data }) => {
  // console.log(data);

  return (
    <div className="navbar">
      <p>Navbar</p>
      <p>navbar title</p>
      <Body ex={data} />
    </div>
  );
};
