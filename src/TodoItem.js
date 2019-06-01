import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick} key={this.props.index} >
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

export default TodoItem;
