import React, { Component } from 'react';

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        return (
            <li onClick={this.handleClick} key={this.props.index} >{this.props.content}</li>
        )
    }

    handleClick () {
        // alert(this.props.index)
        this.props.handleDelete(this.props.index);
    }

}

export default TodoItem;
