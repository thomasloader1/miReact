import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
        this.props.onAddTodo(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Titulo" />
                    </div>

                    <div className="form-group">
                        <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsabilidad" />
                    </div>

                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Descripcion" />
                    </div>

                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit"  className="btn btn-primary" value="Confirmar" />
                    </div>

                </form>
            </div>
        )
    }
}

export default TodoForm;