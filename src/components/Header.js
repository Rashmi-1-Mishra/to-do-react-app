import React from 'react';
import { Component } from 'react';
import '../Css/Header.css';

class Header extends Component {
  render(){
    return(
      <div className="Header">
        {this.props.label}
      </div>
    )
  }
}
export default Header;
