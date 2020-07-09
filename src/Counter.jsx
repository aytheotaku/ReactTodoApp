import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState(state=>(
            {
                count: state.count + 1
            }
        ))
    }
    decrement(){
        this.setState(state=>(
            {
                count: state.count - 1
            }
        ))
    }
    
    render() {
        const styles = {
            margin:"0px auto",
            border:"2px solid purple",
            textAlign:"center"
        }

        return (
            <>
                <div style={styles}>
                
                    <span>{this.state.count}</span><br/>
                    <button style={{marginRight:"5px"}} onClick={this.increment}>Increment</button>
                    {(this.state.count > 0 ) && <button onClick={this.decrement}>Decrement</button>}
                </div>
            </>
        )
    }
}

export default Counter
