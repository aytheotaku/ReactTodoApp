import React, { Component } from 'react'
// import Container from './components/container-component/Container'
// import User from './components/user-component/User'
import Container from './components/container-component/Container'

export class App extends Component {
  constructor(){
    super()

    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      if(!response.ok){
        throw new Error (`Couldn't locate api.`)
      }
      return response
    }).then(response=>response.json()).then(data=>{this.setState({users:data})})
    .catch(err=>console.log(`something went wrong ${err}`))
  }

render() {
    return (
      <>
        <div>
          <Container users={this.state.users}/>
        </div>
      </>
    )
  }
}

export default App
