import React, { Component } from 'react';
import './App.css';
import ApiLogo from "./ApiLogo.svg";
class Navbar extends Component{
    render(){
        return(
            <div className="header">
                <h1> Academy Award Winning Films of 2019</h1>
                <a href="https://apispreadsheets.com/"target="_blank"> <img src={ApiLogo} alt="api" width="auto" height="80"></img></a>
            </div>
        )
    }
}

export default Navbar;