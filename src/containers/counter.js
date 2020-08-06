import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        count : 0
    }

    handleClickPlus = e => this.setState({ count: this.state.count ++})

    handleClickMinus = e => this.setState({ count: this.state.count --})

    render() {
        return (
            <div>
                <button id="increment" onClick={ this.handleClickPlus }>+</button>
                <span>{this.state.count}</span>
                <button id="decrement" onClick={ this.handleClickMinus }>-</button>
            </div>
        )
        
    }

}

export default Counter;






