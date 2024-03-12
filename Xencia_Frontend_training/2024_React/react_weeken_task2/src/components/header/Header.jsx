import React,{Component} from "react";

import "./Header.css";
import Search from "./search/Search";
import Icon from "./icon/Icon";

// class Header extends Component{
//   render(){

//   }
// }

const Header = (props) => {
  const {listValueDeleted} =props
  console.log(listValueDeleted)

  return (
    <div className="header">
      <Search />
      <Icon listValueDeleted={listValueDeleted}/>
      <h1></h1>
    </div>
  );
};

export default Header;
