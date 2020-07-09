import React, { Component } from 'react'
import './todos.css'
import SearchBar from './components/search-bar/SearchBar'
import TodoHandler from './components/todo-handler/TodoHandler'


var userArray = [];
class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userInput:"",
             toDos : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        document.addEventListener('keypress', (event)=>{
            if(event.keyCode === 13){
                this.handleSubmit()
            }
            else{
                return
            }
        })
    }
    handleChange(event){
        this.setState({
            userInput:event.target.value
        })
    }   
        
    handleSubmit(){
        if(this.state.userInput !== ''){
            userArray.push(this.state.userInput)
            this.setState({
            toDos:userArray,
            userInput:""
            })
        }
        else{
            alert(`Type in a to-do`)
        }
    }
    handleClick(event){
        event.target.classList.toggle('completed')
    
    }

    render() {
            const todos = userArray.map((todo, index)=>{
                return(
                    <>
                    <li key={index} className="li " onClick={this.handleClick}>{todo}</li>
                     </>
                ) 
            })
    return (
            <>
                <div className="container">
                    <h5>Simple React ToDo App :)</h5>
                    <SearchBar userInput={this.state.userInput} searchPlaceHolder="Enter a todo" handleChange={this.handleChange} />
                    <br/>
                    <button className="btn" onClick={this.handleSubmit}>Add Todo</button>
                    <TodoHandler todo={todos}/>
                </div>
            </>
        )
    }
}

export default Todos
