import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import task from './mocks/task';
import {includes, filter, orderBy as funOrderBy,remove}   from 'lodash';
// import Lifecycle from './components/Lifecycle';
import './App.css';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items       : task,
            isShowForm  : false,
            strSearch   : '',
            orderBy     : 'name',
            orderDir    : 'asc',
            itemSelect  : null,
        };
        this.handleAddbtn       = this.handleAddbtn.bind(this);
        this.handleCancelbtn    = this.handleCancelbtn.bind(this);
        this.DataSearch         = this.DataSearch.bind(this);   
        this.handleSort         = this.handleSort.bind(this);    
        this.handleDelete         = this.handleDelete.bind(this);    
        this.handleSumitBtn         = this.handleSumitBtn.bind(this);   
        this.handleEditbtn         = this.handleEditbtn.bind(this);   
    }

    handleAddbtn () {
        this.setState({
            isShowForm : ! this.state.isShowForm,
            itemSelect  : null,
        })
    }   

    handleCancelbtn () {
        this.setState({
            isShowForm : ! this.state.isShowForm,
        })
    }

    DataSearch(value) {
        this.setState({strSearch : value})
    }

    handleDelete(id) {        
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });
       this.setState({
        items : items,
       })
    }

    handleSort(orderBy,orderDir) {
        this.setState({
            orderBy : orderBy,
            orderDir: orderDir,
        })
    }

    handleSumitBtn (item) {       
        let items = this.state.items;
        if(item.id !== null) { //edit
            items.forEach((elm,key) => {
                if(elm.id === item.id) {
                    items[key].name = item.name;
                    items[key].level = item.level;
                }
            })
        } else { //add
            items.push({
                id : uuidv4(),
                name : item.name,
                level:  +item.level,
            })
        }
        
        this.setState({
            items : items,
            isShowForm: false,
        })
    }

    handleEditbtn(item) {        
        this.setState({
            itemSelect : item,
            isShowForm : true,
        })
    }


    render() {        
        let {isShowForm,strSearch,orderBy,orderDir} = this.state;
        let nameSort = orderBy+' - '+orderDir;
        let elmForm = null;
        console.log(nameSort);
        if(this.state.isShowForm === true) {
            elmForm = <Form 
                        handleCancelbtn={this.handleCancelbtn}
                        handleSumitBtn = {this.handleSumitBtn}
                        itemSelect ={this.state.itemSelect}
                        />;
        }
        let itemsOrigin = [...this.state.items];
        let items       = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(),strSearch);
        })
        items = funOrderBy(items,[orderBy],[orderDir]);
        return (
            <div className="row">
                            
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control 
                handleAddbtn={this.handleAddbtn}
                isShowForm = {isShowForm}
                Search = {this.DataSearch}
                nameSort = {nameSort}
                handleSort ={this.handleSort}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                {elmForm}
                {/* FORM : END */}
                <List
                items = {items} 
                handleDelete = {this.handleDelete}
                handleEditbtn = {this.handleEditbtn}
                />
                {/* LIST : START */}
			</div>
        );
    }
}

export default App;
