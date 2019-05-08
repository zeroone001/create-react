import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputVal: '',
            list: []
        };
    }

    render () {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputVal} onChange={this.handleInput.bind(this)}  />
                    <button>提交</button>
                </div>
                <ul>
                    <li></li>
                </ul>
            </Fragment>
            )
    }

    handleInput (e) {
        console.log(e.target.value);
        this.setState({
            inputVal: e.target.value
        })
        // this.state.inputVal = e.target.value;
    }
}

export default TodoList;