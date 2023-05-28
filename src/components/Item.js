import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditbtn = this.handleDelete.bind(this);
    }

    handleDelete(id) {        
        this.props.handleDelete(id);
    }

    handleEdit(item) {
        this.props.handleEditbtn(item);
    }


    render() {
        const {item} = this.props;
        let {index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>
                    {item.name}
                </td>
                <td className="text-center">
                    {this.showLevel(item.level)}
                </td>
                <td>
                    <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">
                    Edit
                    </button>
                    <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">
                    Delete
                    </button>
                </td>
            </tr>
        );        
    }
    showLevel(level) {
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1) {
            elmLevel = <span className="label label-info">Medium</span>;
        }
        if(level === 2) {
            elmLevel = <span className="label label-danger">Hight</span>;
        }
        return elmLevel;
        
    };
}

export default Item;
