import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reducer from '../reducer/Reducer';


class Submit extends Component {
    
    // handleInputChange = e => this.setState({[e.target.name]: e.target.value});

    updateList = e => this.props.allVeg({[e.target.name]: e.target.value});
    
    render() {
        
    return (
        <div> 
        <form>
            <input type="text" id="veg" name="veg"></input>
            <input type = "submit" onClick={this.updateList}></input>
        </form>

        </div>
    )
    }
}


// has a form with one controlled text input and a submit button

// on form submission, the user's input is added to 'things' in the Redux store
// renders the list of things

export default connect (Reducer) (Submit);