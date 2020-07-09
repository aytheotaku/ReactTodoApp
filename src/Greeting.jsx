import React, { Component } from 'react'

class Greeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false,
            message:"Hello Admin"
        }
        this.logOut = this.logOut.bind(this)
        this.logIn = this.logIn.bind(this)
    }

    logOut(){
        this.setState({
            isLoggedIn:false
        })
    }

    logIn(){
        this.setState({
            isLoggedIn:true
        })
    }

    render() {
        const defMessage = "I know you not";
        const {isLoggedIn, message} = this.state
        const LogOut = <div><h1>{message}</h1><button onClick={this.logOut}>Log out</button></div>
        const LogIn = <div><h1>{defMessage}</h1><button onClick={this.logIn}>Log In</button></div>
        return (
            <div>
            {isLoggedIn?LogOut:LogIn} 
           
            </div>
        )
    }
}

export default Greeting
