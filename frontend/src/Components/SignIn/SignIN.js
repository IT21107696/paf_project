import React, { Component } from 'react';
import "../LoginPage/LoginPage.css"
import config from '../../config';

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
        <div>
             <button className="login__button" onClick={(e)=>{
                window.location.href = `http://localhost:3000/register`
             }}>Log In</button>
        </div> 
    );
    }
}
 
export default SignIN;