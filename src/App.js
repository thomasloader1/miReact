import React, { Component } from 'react';
import './App.css';

import { todos } from './todos.json';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      todos
    }
  }

render(){
    
    const todos = this.state.todos.map((todo, i) =>{ 
      return(
        <div className="col-md-4">

            <div className="card mt-4">
            
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2 p-2"> { todo.priority } </span>
            </div>

            <div className="card-body">
                <p>{todo.description}</p>
                <p>{todo.responsible}</p>
            </div>

          </div>

        </div>
      )
    })

    return (
      <div className="App">
        
        <nav className="nav navbar-dark bg-dark">
              <a className="text-white" href="#">Tareas 
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
              </a>
        </nav>
         
        <div className="container">
            
            <div className="row mt-3"> 

              { todos }

            </div>

        </div>

      </div>
    );
  }
}
export default App;
