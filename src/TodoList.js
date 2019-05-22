import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputVal: '',
            list: ['213', 'eqweqw']
        };
        this.handleBtn = this.handleBtn.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInput = this.handleInput.bind(this);        
    }

    render () {
        return (
            <Fragment>
                {/* 这是一个注释 */}
                <div>
                    <label htmlFor="insertId">请输入内容</label>   
                    <input 
                        id="insertId" 
                        className="input" 
                        value={this.state.inputVal} 
                        onChange={this.handleInput}  />
                    <button onClick={this.handleBtn}>提交</button>
                </div>
                <ul>
                    {
                        this.handleDom()
                    }
                </ul>
            </Fragment>
            )
    }

    handleDom () {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index} handleDelete={this.handleDelete}  />
            )
        })
    }

    handleInput (e) {
        const value = e.target.value;
        this.setState(() => ({
            inputVal: value
        }));
        // this.setState({
        //     inputVal: e.target.value
        // })
    }

    handleBtn () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputVal],
            inputVal: ''
        }));
        // this.setState({
        //     list: [...this.state.list, this.state.inputVal],
        //     inputVal: ''
        // });
    }

    handleDelete (index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        });
    }
}

export default TodoList;