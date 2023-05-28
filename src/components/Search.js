import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
     
        
    }

    handleChange(event) {
        this.setState({strSearch: event.target.value});
    }

    handleClear() {
        this.setState({strSearch:''});
    }

    handleSearch(){
        this.props.DataSeach(this.state.strSearch);
      }

    

    render() {
      
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                    type="text"
                    className="form-control"
                    ref="search"
                    placeholder="Search for..."
                    value={this.state.strSearch} 
                    onChange={this.handleChange}
                    />
                    <span className="input-group-btn">
                    <button onClick={this.handleClear} className="btn btn-warning" type="button">
                        Clear
                    </button>
                    <button onClick={this.handleSearch} className="btn btn-info" type="button">
                        Go!
                    </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
