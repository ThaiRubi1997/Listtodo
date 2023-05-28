import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskID : null,
            taskName : '',
            taskLevel: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    
    handleSubmit(event) {      
        event.preventDefault();  
        let item = {
            id   : this.state.taskID,
            name : this.state.taskName,
            level: this.state.taskLevel,
        }
        this.props.handleSumitBtn(item);
        // this.props.handleSumitBtn(item);
        
    }

    componentDidMount() {
        let item = this.props.itemSelect;        
        if(item !== null) {
            if (item.id !== '' ) {
                this.setState({
                    taskID : item.id,
                    taskName : item.name,
                    taskLevel: +item.level,
                })
            }
        }
    }


    render() {       
        return (
            <div className="row">
                    <div className="col-md-offset-7 col-md-5">
                    <form action="" method="POST" className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            name="taskName"
                            type="text"
                            className="form-control"
                            placeholder="Task Name"
                            ref="task_name"
                            value={this.state.taskName} onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="taskLevel"
                            id="inputDs"
                            className="form-control"
                            required="required"
                            value={this.state.taskLevel} onChange={this.handleChange}
                        >
                            Small
                            <option value={+0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-primary">
                        Submit
                        </button>
                        <button onClick={this.props.handleCancelbtn} type="button" className="btn btn-default">
                        Cancel
                        </button>
                    </form>
                    </div>
                </div>
        );
    }
}

export default Form;
