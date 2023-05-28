import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        let btn = <button onClick={this.props.handleAddbtn} type="button" className="btn btn-info btn-block">Add Task</button>
        if (this.props.isShowForm === true) {
            btn = <button onClick={this.props.handleAddbtn} type="button" className="btn btn-success btn-block">Close Form</button>
        }
        return (
            <div className="row">
                    {/* SEARCH : START */}
                    <Search DataSeach={this.props.Search}/>
                    {/* SEARCH : END */}
                    {/* SORT : START */}
                    <Sort 
                    nameSort = {this.props.nameSort}
                    handleSort ={this.props.handleSort}
                    />
                    {/* SORT : END */}
                    {/* ADD : START */}
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        {btn}
                    </div>
                    {/* ADD : END */}
                </div>
        );
    }
}

export default Control;
