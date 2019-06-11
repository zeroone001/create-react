import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
// import { TestContext } from './test-context.js';

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        const { content } = this.props;
        // JSX -> JS 对象 -> 真实的DOM 
        return (
            <li theme={this.context.something} onClick={this.handleClick} key={this.props.index} >
                {content}
            </li>
        )
    }

    handleClick () {
        // alert(this.props.index)
        const {handleDelete, index} = this.props;
        handleDelete(index);
    }

}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    handleDelete: PropTypes.func,
    index: PropTypes.number
};
TodoItem.defaultProps = {
    test: 'hello world'
};
// TodoItem.contextType = TestContext;

export default TodoItem;
